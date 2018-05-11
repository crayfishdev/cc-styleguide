import { Post } from './post';

export interface Collection {
    label: string;
    posts: Post[];
    subcollections: Collection[];
}

class Category implements Collection {
    private _label: string;
    private _posts: Post[];
    private _subcategories: Collection[];

    get label(): string { return this._label; }
    get posts(): Post[] { return this._posts; }
    get subcollections(): Collection[] { return this._subcategories; }

    constructor(
        label: string = '',
        posts: any[] = [],
        subcats: any[] = []) {
        this._label = label;
        this._posts = posts.map(file => new Post(file.layout, file.filePath, file.title, file.Collections));
        this._subcategories = subcats.map(subategory => new Category(subategory.label, subategory.files, subategory.subcollections));
    }
}

export class CategoryFactory {
    static create(collection): Collection {
        const category: Collection = new Category(collection.label, collection.files, collection.subcollections);
        return category;
    }
}
