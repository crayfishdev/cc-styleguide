import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uxd-component-list',
  templateUrl: './uxd-component-list.component.html',
  styleUrls: ['./uxd-component-list.component.scss']
})
export class UxdComponentListComponent implements OnInit {

  private _categoryName: string;
  get categoryName(): string { return this._categoryName; }
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._categoryName = this._route.snapshot.paramMap.get('categoryName');
    });
  }

}
