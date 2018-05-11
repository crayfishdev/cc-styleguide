import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../shared/categories/categories.service';
import { Collection } from '../../../shared/models/category';
import { AccordianDirective } from './../../../shared/accordian/accordian.directive';
import { AccordianItemDirective } from '../../../shared/accordian/accordian-item.directive';

@Component({
  selector: 'app-primary-sidebar',
  templateUrl: './primary-sidebar.component.html',
  styleUrls: ['./primary-sidebar.component.scss'],
  host: {
    class: 'sidebar'
  }
})
export class PrimarySidebarComponent implements OnInit  {
  @ViewChild(AccordianDirective) accordian: AccordianDirective;

  _categories: Collection[] = [];
  public get categories() { return this._categories; }


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

    public open(item: AccordianItemDirective) {
      this.accordian.closeAll();
      item.open();
    }
}
