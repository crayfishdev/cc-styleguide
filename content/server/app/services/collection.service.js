const join = require('path').join;
const read = require('fs').readFileSync;

var nextCollectionID = 1;

class CollectionProvider {
    static get instance() {
        return this._instance;
    }

    constructor() {
        if(this._instance){
            return this._instance;
        }
        this._collections = [];
        this._instance = this;
    }

    
    fetchAllCollections (callback) {
        callback(this._collections);
    }

    fetchCollectionByLabel(label, callback) {
        var foundCollections = this._collections.filter(function(collection) {return collection.label === label});
        if (foundCollections.length == 0) {
            callback('Collection not found', null);
        } else {
            callback(null, foundCollections);
        }
    }

    fetchSubcollectionByLabel(collection, label, callback) {
        var foundCollections = collection.subcollections.filter((subcollection) => {
            console.log(subcollection)
            return subcollection.label === label;
        });
        
        if (foundCollections.length == 0) {
            callback('Collection not found', null);
        } else {
            callback(null, foundCollections);
        }
    }

    insertCollection(collection, callback = null) {
        collection._id = nextCollectionID++;
        this._collections.push(collection);
        // callback(null, collection);
    }
};

const instance = new CollectionProvider();
Object.freeze(instance);

module.exports = instance;
