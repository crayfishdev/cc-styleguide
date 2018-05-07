import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimarySidebarComponent } from './primary-sidebar/primary-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PrimarySidebarComponent
  ],
  exports: [
    PrimarySidebarComponent,
  ]
})
export class SidebarModule { }
