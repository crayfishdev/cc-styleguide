class File {
    constructor(file) {
        if(file.filePath){
            this._layout = file.layout || '';
            this._filePath = file.filePath || '';
            this._title = file.title || this._filePath;
            this._collections = file.collections || [];
        }
        return null;
    }

    get title() { return this._title; }
    get layout() { return this._layout; }
    get filePath() { return this._filePath; }

    set collections(value) { return this._collections = value; }
    get collections() { return this._collections; }

    toJSON() {
        return {
            title: this._title,
            layout: this._layout,
            filePath: this._filePath,
            collections: this._collections
        };
    }

    stringify() {
        var json = this.toJSON();
        return JSON.stringify(json);
    }
}

module.exports = File;