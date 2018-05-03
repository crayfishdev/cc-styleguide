var File = require('./file.model');

class Collection {
    constructor(collection) {
        if (collection) {
            this._label = collection.label || '';
            this._files = collection.files || [];
            this._subcollections = collection.subcollections || [];
        }
    }

    get label() { return this._label; }
    set label(value) { this._label = value; }

    get files() { return this._files; }
    get subcollections() { return this._subcollections; }

    
    pushFile(file) {
        if (!this._files || !file){
            return;
        }
        var fileObj = new File(file);
        // var existingFile = this._files.find(el => {
        //     return el === fileObj;
        // });
        // if(existingFile) {
        //     return;
        // }
        this.files.push(fileObj);
    } 

    pushSubcollection(collection) {
        if (!this._subcollections || !collection){
            return;
        }
        this._subcollections.push(collection);
    }

    toJSON() {
        return {
            label: this.label,
            files: this.files,
            subcollections: this.subcollections,
        };
    }

    stringify() {
        var json = this.toJSON();
        return JSON.stringify(json);
    }
}

module.exports = Collection;