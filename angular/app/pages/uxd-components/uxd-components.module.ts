import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { UxdComponentListComponent } from './uxd-component-list/uxd-component-list.component';
import { UxdComponentCategoriesComponent } from './uxd-component-categories/uxd-component-categories.component';
import { UxdComponentOverviewComponent } from './uxd-component-detail/uxd-component-overview.component';
import { UxdComponentDetailModule } from './uxd-component-detail/uxd-component-detail.module';

export const componentRoutes: Routes = [
  { path: 'all',
    component: UxdComponentCategoriesComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full'},
  { path: ':categoryName', component: UxdComponentListComponent },
  { path: ':categoryName/:componentName', loadChildren: () => UxdComponentDetailModule },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UxdComponentDetailModule,
    RouterModule.forChild(componentRoutes),
  ],
  declarations: [
    UxdComponentListComponent,
    UxdComponentCategoriesComponent,
  ],
  exports: [
    UxdComponentDetailModule,
    UxdComponentListComponent,
    UxdComponentCategoriesComponent,
    RouterModule,
  ],
})
export class UxdComponentsModule { }
