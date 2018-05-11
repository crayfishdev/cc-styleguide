var Post = require('./post.model');
var Node = require('../utilities/tree').Node;

class Collection {
    constructor(collection) {
        if (collection) {
            this._label = collection.label || '';
            this._posts = collection.posts || new Map();
            this._permalink = collection.permalink || encodeURI(this.label);
            this._subcollections = collection.subcollections || new Map();
        }
    }

    get label() { return this._label; }
    set label(value) { this._label = value; }
    get permalink() { return this._permalink; }
    get subcollections() { return Array.from(this._subcollections.values());}
    get posts() { return Array.from(this._posts); }
    
    addPost(post) {
        if (!this._posts || !post || !post.id){
            return;
        }
        var exisitingFile = this.updatePost(post);
        this._posts.set(exisitingFile.id, exisitingFile);
    } 

    updatePost(post){
        var exisitingPost = this._posts.get(post.id);
        if(exisitingPost && exisitingPost.id){
            exisitingFile = Object.assign(exisitingFile, post);
        }else {
            exisitingPost = post;
        }
        return exisitingPost;
    }

    static addSubcollection(root, subcollection){
        if (!root._subcollections || !subcollection || !subcollection.label){
            return;
        }
        root._subcollections.set(subcollection.permalink, subcollection);
    }

    toJSON() {
        return {
            label: this.label,
            permalink: this.permalink,
            posts: this.posts,
            subcollections: this.subcollections
        };
    }

    stringify() {
        var json = this.toJSON();
        return JSON.stringify(json);
    }
}

module.exports = Collection;