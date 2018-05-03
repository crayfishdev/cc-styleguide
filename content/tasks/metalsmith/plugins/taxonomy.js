var read = require('fs').read;
var unique = require('lodash/uniq');
var minimatch = require('minimatch');
var normalize = require('../utilities/options');
var Collection = require('../models/collection.model');
var File = require('../models/file.model');


module.exports = plugin;

function plugin(options) {
    var opts = normalize(options);
    var collections = opts;
    var props = _getCollectionProps(collections);
    var matchers = [];
    var names = props.name;

    /* Iterate over the list of keys provided */
    forEachCollection(collections, collection => {
        var matcher = {
            key: collection.name,
        };
        var subcollections = [];

        // The collection is flat. Look for the pattern property
        if(!collection.pattern || !collection.name) {
            return;
        }

        if(_numOfSubcategories(collection) > 0) {
            // The collection has subcategories that need to be traversed.
            var subcategories = collection.subcategories;

            matcher.subcategories = subcategories.map(subcategory => {
                return ({
                    key: subcategory.name,
                    match: patternMatcher(subcategory),
                });
            });
        }

        matcher.match = patternMatcher(collection);
        matchers.push(matcher);
    });

    return function (files, metalsmith, done) {
        var metadata = metalsmith.metadata();
        var fileJSON = {};
        var collections = new Map();
        var collection;
        var collectionFile;
        // Find the files to associate with each collection
        Object.keys(files).forEach( path => {
            var file = files[path];
            var matchName; 

            collectionFile = new File({
                title: file.title,
                layout: file.layout,
                filePath: path,
                collections: file.collections
            });

            // For each potential collection match...
            matchers.forEach(matcher => {
                matchName = matcher.key;
                collection = getCollection(collections, matchName) ;
                                
                if(typeof matcher.match == 'function') {
                    matcher.match(path, file).forEach(_ => {
                        collectionFile.collections = file.collections;
                        collection.pushFile(collectionFile);
                        return;
                    });
                }
                
                /* Subcategories nested under a collection. */
                if(matcher.subcategories && Object.keys(matcher.subcategories).length){
                    // console.log(matcher.subcategories);
                    var subcollection;
                    matcher.subcategories.forEach(submatcher => {
                        submatcher.match(path, file).forEach(key => {
                            subcollection = collection.subcollections.find(collection => collection.label == key) ||  new Collection({label: key});
                            subcollection.pushFile(collectionFile);
                        });
                    });
                    collection.pushSubcollection(subcollection);
                }

                collections.set(collection.label, collection);
            });
        });

        metadata.collections = [];
        collections.forEach((value, key) => {
            metadata.collections.push(value);
            return metadata.collections[key];
        });
        // return metadata.collections;
        done();
    };


    function getCollection(collections, collectionName) {
        var collection = collections.get(collectionName);
        if(!collection){
            // If no collection exists with that label, create a new collection
            collection = new Collection({ label: collectionName });
        }
        return collection;
    }
}

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
        category.name, {
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

function _getChildCollectionProps(options) {
    var props;
    var result = options.reduce((acc, option) => {
        props = Object.keys(option).forEach(prop => {
            acc[prop] = (acc[prop] || []).concat(option[prop]);
        });
        return acc;
    }, {});
    return result;
}

function _getCollectionProps(options) {

    
    return _getChildCollectionProps(options);
}

function _numOfSubcategories(collection) {
    if(collection.subcategories) {
        return collection.subcategories.length;
    }
    return 0;
}

function _getSubcategories(collection) {
    if(_numOfSubcategories) {
        return collection.subcategories;
    }
    return null;
}

function forEachCollection(collection, func) {
    if (!Array.isArray(collection)) { return; } // TODO: throw error
    if(typeof func !== 'function') { return; } // TODO: throw an error
    collection.forEach(sub => {
        return func(sub);
    });
}

function setDefaultOptions(opts) {
    opts = opts || {};
    opts.componentsPath = opts.componentsPath || 'components.json';
    opts.stylesPath = opts.stylesPath || 'components.json';
    opts.resourcesPath = opts.resourcesPath || 'components.json';
    return opts;
}
