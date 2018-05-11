let isEqual = require('lodash').isEqual;

var _nextNodeID = 0;
var traversalType = Object.freeze({
    BREADTH_FIRST: 0,
});

class Node{
    get id() { return this._id; }
    get parent() { return this._parent; }
    
    get children() { return Array.from(this._children.values()); }
    get hasChildren() { return this._children.size > 0; }
    
    constructor(data) {
        this.data = data;
        this._parent = null;
        this._children = new Map();
        this._id = _nextNodeID++;
    }

    static addChild(parentNode, childNode){
        if(childNode && parentNode){
            parentNode._children.set(childNode.id, childNode);
            childNode._parent = parentNode;
            return parentNode._children;
        }
    }

    getChild(id){
        return this._children.get(id);
    }

    find(node) {
        if(this.hasChildren){
            this.children
        }
    }

    static removeNode(parent, child){
        /* Return a new array without 'node' as a child */
        parent._children = parent._children.filter(node => {
            return node.id === child.id;
        });
        return this._children;
    }

    toJSON() {
        return {data: this.data, children: this.children};
    }
    
    toString() {
        return JSON.stringify(this.toJSON());
    }
}

class Tree {
    get root() { return this._root; }
    constructor(root){
        let node = new Node(root);
        this._root = node;
    }

    traverseBF(callback){
        var currentTree = null;
        var queue = [this._root];
        currentTree = queue.shift();
        while (currentTree) {
          currentTree.children.forEach(child => {
            queue.push(child);
          });
          callback(currentTree);
          currentTree = queue.shift();
        }
    }

    traverseDF(callback){
        (function recurse(node){
            if(node.hasChildren) {
                node.children.forEach(child => {
                    recurse(child);
                });
            }
            callback(node);
        })(this.root);
    }

}

module.exports = {
    Node, Tree
};