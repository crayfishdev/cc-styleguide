class Matcher {
    get key() { return this._key; }
    get match() { return this._match; }
    get matchedPosts() { return this._matches; }
    constructor(data) {
        if (data) {
            this._key = data.key;
            this._match = data.match;
            this._matches = [];
        }
    }

    addMatch(post) {
        this._matches.push(post);
    }
}
module.exports = Matcher;
