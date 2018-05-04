import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiConfigService } from '../config/api-config.service';
import { CategoryFactory, Collection } from './../models/category';

@Injectable()
export class CategoriesService {
  private _URL: string;
  private _categories: Collection[] = [];

  constructor(private _http: HttpClient, private _config: ApiConfigService) { 
    this._URL = _config.API_CATEGORIES_URL;
  }

  private _getAllCollections(): Observable<Collection[]> {
    return this._http.get<Collection[]>(this._URL);
  }

  public getAllCategories(): Observable<Collection[]> {
     return this._getAllCollections().map(collections => {
        return collections.map((collection: Collection) => {
           return CategoryFactory.create(collection);
        });
    });
  }

}
