import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianItemDirective } from './accordian-item.directive';
import { AccordianDirective } from './accordian.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccordianItemDirective, AccordianDirective],
  exports: [AccordianItemDirective, AccordianDirective]
})
export class AccordianModule { }
