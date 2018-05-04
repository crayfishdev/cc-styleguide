import { Button, ButtonType } from 'cc-component-library/src/lib/button/button';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'app';

  public defaultButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.WARNING,
    ariaLabel: 'This is a default button. Click It!',
    isOutlined: true,
  };
  constructor() {}

  ngOnInit() {
  }
}
