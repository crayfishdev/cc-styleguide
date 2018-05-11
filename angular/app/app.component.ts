import { Button, ButtonType } from 'cc-component-library/src/lib/button/button';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Collection } from './shared/models/category';
import { CategoriesService } from './shared/categories/categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'app';
  _categories: Collection[] = [];
  public get categories() { return this._categories; }

  public defaultButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.WARNING,
    ariaLabel: 'This is a default button. Click It!',
    isOutlined: true,
  };

  constructor(
    private _route: ActivatedRoute,
    private _categoryService: CategoriesService) {    }

    ngOnInit() {
      this._categoryService.getAllCategories()
        .subscribe((categories: Collection[]) => {
          categories.forEach((category: Collection) => {
            this._categories.push(category);
          });
        });
    }
}
