import { Component } from '@angular/core';
import { ButtonDirective } from 'cc-component-library/src/lib/button/button.directive';
import { ButtonType, Button } from 'cc-component-library/src/lib/button/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public defaultButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.DEFAULT,
    ariaLabel: 'This is a default button. Click It!',
  };
  public primaryButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.PRIMARY,
    ariaLabel: 'This is a default button. Click It!',
  };
  public successButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.SUCCESS,
    ariaLabel: 'This is a default button. Click It!',
  };
  public infoButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.INFO,
    ariaLabel: 'This is a default button. Click It!',
  };
  public warningButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.WARNING,
    ariaLabel: 'This is a default button. Click It!',
  };
  public dangerButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.DANGER,
    ariaLabel: 'This is a default button. Click It!',
  };
  public linkButtonObj: Button = {
    id: 'cc-default-button',
    type: ButtonType.LINK,
    ariaLabel: 'This is a default button. Click It!',
  };
}
