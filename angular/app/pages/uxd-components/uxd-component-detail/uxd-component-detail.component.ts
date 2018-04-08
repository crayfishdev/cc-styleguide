import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uxd-component-detail',
  templateUrl: './uxd-component-detail.component.html',
  styleUrls: ['./uxd-component-detail.component.scss']
})
export class UxdComponentDetailComponent implements OnInit {
  info: {name: string, category: string};
  constructor(private _route: ActivatedRoute) {}
  ngOnInit() {
    this.info = this.getComponentInfo();
  }

  getComponentInfo(): {name: string, category: string} {
    const componentCategory: string = this._route.snapshot.paramMap.get('categoryName');
    const componentName: string = this._route.snapshot.paramMap.get('componentName');
    return {
      category: componentCategory,
      name: componentName,
    };
  }
}
