import { Collection } from './../../../shared/models/category';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../shared/categories/categories.service';

@Component({
  selector: 'app-uxd-component-detail',
  templateUrl: './uxd-component-detail.component.html',
  styleUrls: ['./uxd-component-detail.component.scss']
})
export class UxdComponentDetailComponent implements OnInit {
  private _info: {name: string, category: string };
  private _category: Collection;
  get category(): string { return this._info.category; }

  constructor(private _route: ActivatedRoute, private _categoryService: CategoriesService) {}
  ngOnInit() {
    this._info = this.getComponentInfo();
    this._route.params.subscribe(params => {
      this._info = this.getComponentInfo();
    });

  }

  getComponentInfo(): {name: string, category: string} {
    const categoryName: string = this._route.snapshot.paramMap.get('categoryName');
    const componentName: string = this._route.snapshot.paramMap.get('componentName');
    return {
      category: categoryName,
      name: componentName,
    };
  }
}
