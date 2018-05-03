import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxdStylesListComponent } from './uxd-styles-list/uxd-styles-list.component';
import { UxdStyleCategoriesComponent } from './uxd-style-categories/uxd-style-categories.component';
import { UxdStyleDetailComponent } from './uxd-style-detail/uxd-style-detail.component';
import {RouterModule, Routes} from '@angular/router';

export const styleRoutes: Routes = [
  { path: '', component: UxdStyleCategoriesComponent },
  { path: ':categoryName', component: UxdStylesListComponent },
  { path: ':categoryName/:styleName', component: UxdStyleDetailComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(styleRoutes),
  ],
  declarations: [UxdStylesListComponent, UxdStyleCategoriesComponent, UxdStyleDetailComponent],
  exports: [
    UxdStylesListComponent,
    UxdStyleCategoriesComponent,
    UxdStyleDetailComponent,
    RouterModule],
})
export class UxdStylesModule { }
