import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTitleDirective, TabContentDirective, TabDirective, TabsetComponent } from './tabset.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabDirective,
    TabsetComponent,
    TabTitleDirective,
    TabContentDirective,
  ],
  exports: [
    TabDirective,
    TabsetComponent,
    TabTitleDirective,
    TabContentDirective,
  ]
})
export class TabsetModule { }
