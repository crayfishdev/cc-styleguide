import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimarySidebarComponent } from './primary-sidebar/primary-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PrimarySidebarComponent],
  exports: [
    PrimarySidebarComponent,
  ]
})
export class SidebarModule { }
