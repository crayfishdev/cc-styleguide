_nextPostID = 0;
class Post {
    constructor(post) {
        if(post.filePath){
            this._id = post.id || _nextPostID++;
            this._layout = post.layout || '';
            this._filePath = post.filePath || '';
            this._title = post.title || this._filePath;
            this._collections = post.collections || [];
        }
    }

    get id() { return this._id; }
    get title() { return this._title; }
    get layout() { return this._layout; }
    get filePath() { return this._filePath; }

    set collections(value) { return this._collections = value; }
    get collections() { return this._collections; }

    toJSON() {
        return {
            id: this._id,
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

module.exports = Post;