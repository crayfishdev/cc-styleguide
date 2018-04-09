import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { UxdComponentListComponent } from './uxd-component-list/uxd-component-list.component';
import { UxdComponentCategoriesComponent } from './uxd-component-categories/uxd-component-categories.component';
import { UxdComponentOverviewComponent } from './uxd-component-detail/uxd-component-overview.component';
import { UxdComponentDetailModule } from './uxd-component-detail/uxd-component-detail.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UxdComponentDetailModule,
  ],
  declarations: [
    UxdComponentListComponent,
    UxdComponentCategoriesComponent,
  ],
  exports: [
    UxdComponentDetailModule,
    UxdComponentListComponent,
    UxdComponentCategoriesComponent,
  ],
})
export class UxdComponentsModule { }
