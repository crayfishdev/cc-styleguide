class Taxonomy {
    get title() { return this._title; }
    get permalink() { return this._permalink; }
    get pattern() { return this._pattern; }
    get children() { return this._children; }
    
    get hasChildren() { 
        var _hasChildren = false;
        if(this._children){
            _hasChildren = this._children.size > 0;
        }
        return _hasChildren;
     }

    constructor(data) {
        this._title = data.title;
        this._permalink = data.permalink;
        this._pattern = data.pattern;
        this._children = new Map();

        if(!data.subcollections && !data.children) return;
        var arr = data.subcollections || data.children;
        arr.forEach(child => {
            this._children = this._addChild(this._children, new Taxonomy(child));
        });
    }

    _addChild(children, childTaxonomy) {
        var arr = children;
        if(childTaxonomy && childTaxonomy.title){
            arr.set(childTaxonomy.title, childTaxonomy);
        }
        return arr;
    }

    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Taxonomy;