import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uxd-component-list',
  templateUrl: './uxd-component-list.component.html',
  styleUrls: ['./uxd-component-list.component.scss']
})
export class UxdComponentListComponent implements OnInit {

  categoryName: string;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.categoryName = this.getCategoryName();
  }

  getCategoryName(): string {
    const name = this._route.snapshot.paramMap.get('categoryName');
    return name;
  }

}
