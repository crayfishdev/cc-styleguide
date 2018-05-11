import { Collection } from './category';
export class Post {
    private _layoutTemplate: string;
    private _path: string;
    private _title: string;
    private _collections: Collection[];


    /**
     * Getter path
     * @return {string}
     */
	public get path(): string {
		return this._path;
	}
    

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}
    
    constructor(layout: string, filePath: string, title: string, collections: any[]) {
       this._title = title;
       this._layoutTemplate = layout;
       this._path = filePath;
       this._collections = collections;
    }
}
