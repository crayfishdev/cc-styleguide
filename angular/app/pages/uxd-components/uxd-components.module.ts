import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxdComponentListComponent } from './uxd-component-list/uxd-component-list.component';
import { UxdComponentDetailComponent } from './uxd-component-detail/uxd-component-detail.component';
import { UxdComponentCategoriesComponent } from './uxd-component-categories/uxd-component-categories.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    UxdComponentListComponent,
    UxdComponentDetailComponent,
    UxdComponentCategoriesComponent
  ],
  exports: [
    UxdComponentListComponent,
    UxdComponentDetailComponent,
    UxdComponentCategoriesComponent,
  ]
})
export class UxdComponentsModule { }
