import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxdStylesListComponent } from './uxd-styles-list/uxd-styles-list.component';
import { UxdStyleCategoriesComponent } from './uxd-style-categories/uxd-style-categories.component';
import { UxdStyleDetailComponent } from './uxd-style-detail/uxd-style-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UxdStylesListComponent, UxdStyleCategoriesComponent, UxdStyleDetailComponent],
  exports: [UxdStylesListComponent, UxdStyleCategoriesComponent, UxdStyleDetailComponent],
})
export class UxdStylesModule { }
