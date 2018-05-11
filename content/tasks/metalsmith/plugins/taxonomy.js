var read = require('fs').read;
var unique = require('lodash/uniq');
var minimatch = require('minimatch');
var entries = require('object.entries');

var normalize = require('../utilities/options');
var Collection = require('../models/collection.model');
var Post = require('../models/post.model');
var Taxonomy = require('../models/taxonomy.model');
var Matcher = require('../models/matcher.model');
var Node = require('../utilities/tree').Node;
var Tree = require('../utilities/tree').Tree;


module.exports = plugin;

function plugin(options) {
    let taxonomies = options;
    if(!Array.isArray(taxonomies)) {
        return;
        //TODO: Throw error
    }
    let matcherTree = new Tree(null);
    let matcher, node, childNode, root;
    taxonomies.forEach(taxonomy => {
        createTaxonomyTree(taxonomy, matcherTree.root);
    });

    return function (files, metalsmith, done) {
        var metadata = metalsmith.metadata();
        var matcher, collection, parentNode,parentKey, parentCollection;
        var flatMap = new Map();
        var children = [];
        var collections = new Tree(new Collection({label: 'Collections'}));
        var posts = new Map();
        var file, post, idx;

        // matcherTree.traverseDF(node => console.log(node));
        parentCollection = collections.root;
        Object.keys(files).forEach(path => {
            file = files[path];
            post = new Post({
                title: file.title,
                layout: file.layout,
                filePath: path,
                collections: file.collections
            });

            matcherTree.traverseBF(node => {
                if (!node || !node.data) return;
                matcher = node.data;
              
                if(typeof matcher.match == 'function') {
                    matcher.match(path, file).forEach(match => {
                        post.collections = file.collections;
                        matcher.addMatch(post);
                        // collection.addPost(post);
                    });
                }
            });
        
            posts.set(post.id, post);
            post = null;
            file = null;
        });

        var currentKey, currentCollection;
        metadata.collections = [];

        matcherTree.root.children.forEach((node) => {
            collections = convertTreeToCollection(node, new Collection({label: 'Collections'}));
            metadata.collections.push(collections);
            return metadata.collections;
        });
        done();
    };
}

function convertTreeToCollection(tree, root) {
    var matcher = tree.data;

    var currentCollection = new Collection({
        label: matcher.key,
        posts: matcher.matchedPosts,
    }); 
    if(tree.hasChildren) {
        tree.children.forEach(child => {
            return Collection.addSubcollection(currentCollection, convertTreeToCollection(child, currentCollection));
        });
    }
    Collection.addSubcollection(root, currentCollection);
    return currentCollection;
}


function createTaxonomyTree(taxonomy, root) {
    taxonomy = new Taxonomy(taxonomy);
    var matcher = new Matcher({
        key: taxonomy.title,
        match: patternMatcher(taxonomy)
    });
    var currentNode = new Node(matcher); 
    if(taxonomy.hasChildren) {
        taxonomy.children.forEach(child => {
            return Node.addChild(currentNode, createTaxonomyTree(child, currentNode));
        });
    }
    Node.addChild(root, currentNode);
    return currentNode;
}

/**
 * Generate a dictionary of functions responsible for matching
 * file paths to a given set of 'categories'.
 * 
 * @param {Object} category
 * @returns {Function} Matching function
 */
/**
 * Generate a dictionary of functions responsible for matching
 * file paths to a given set of 'categories'.
 * 
 * @param {Object} category
 * @returns {Function} Matching function
 */
function patternMatcher(category) {
    var matchers = new Map();

    if (!category.pattern) {
        return;
    }

    matchers.set(
        category.title, {
            match: function(file) {
                return minimatch(file, category.pattern);
            }
        }
    );

    return function(filePath, metadata) {
        var matches = [];

        if (metadata.collections) {
            // console.log(metadata.collection);
            var collections = metadata.collections;
            if (!Array.isArray(collections)) {
              collections = [collections];
            }
            collections.forEach(function(key){
              matches.push(key);
            });
        }

        var newMatches = [];
        matchers.forEach( (matcher, category) => {
            if(filePathMatches(matcher,filePath)){
                newMatches.push(category);
            }
        });

        matches = matches.concat(newMatches);
        metadata.collections = unique(matches);
        return newMatches;
    };
}

function filePathMatches(matcher, path) {
    return matcher.match(path);
}