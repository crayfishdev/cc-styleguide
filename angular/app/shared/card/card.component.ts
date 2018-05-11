import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {

  @Input()
  get title(): string { return this._title; }
  set title(val: string) { this._title = val; }
  private _title: string;

  constructor() {
    this._title = this._title || '';
  }

  ngOnInit() {
  }

}
