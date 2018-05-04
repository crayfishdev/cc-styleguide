import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfigService {

  private _API_URL = 'api/';
  get API_URL() { return this._API_URL; }

  private _API_CATEGORIES_URL = this.API_URL + 'categories';
  get API_CATEGORIES_URL() { return this._API_CATEGORIES_URL; }

  constructor() { }

}
