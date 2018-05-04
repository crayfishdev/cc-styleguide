import { Collection } from './../../../shared/models/category';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../../../shared/categories/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uxd-component-categories',
  templateUrl: './uxd-component-categories.component.html',
  styleUrls: ['./uxd-component-categories.component.scss']
})
export class UxdComponentCategoriesComponent implements OnInit {
  private _categories: Collection[] = [];
  private _components: Collection;
  private _componentCategories: Collection[];
  public get categories() { return this._categories; }
  public get subcategories() { return this._componentCategories; }

  private _activeCategory: string;

  constructor(
    private _route: ActivatedRoute,
    private _categoryService: CategoriesService) { }

  ngOnInit() {
    this._categoryService.getAllCategories()
      .subscribe((categories: Collection[]) => {
        categories.forEach((category: Collection) => {
          this._categories.push(category);
          console.log(category);
          if (category.label.toLowerCase() === 'components') {
            this._components = category;
            this._componentCategories = this._components.subcollections;
          }
        });
      });
  }

}
