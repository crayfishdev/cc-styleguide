import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { UxdComponentsModule } from './uxd-components/uxd-components.module';
import { UxdComponentListComponent } from './uxd-components/uxd-component-list/uxd-component-list.component';
import { UxdComponentDetailComponent } from './uxd-components/uxd-component-detail/uxd-component-detail.component';
import { UxdComponentCategoriesComponent } from './uxd-components/uxd-component-categories/uxd-component-categories.component';

// Styles
import { UxdStylesModule } from './uxd-styles/uxd-styles.module';
import { UxdStylesListComponent } from './uxd-styles/uxd-styles-list/uxd-styles-list.component';
import { UxdStyleDetailComponent } from './uxd-styles/uxd-style-detail/uxd-style-detail.component';
import { UxdStyleCategoriesComponent } from './uxd-styles/uxd-style-categories/uxd-style-categories.component';
import { SharedModule } from '../shared/shared.module';
import { UxdComponentOverviewComponent } from './uxd-components/uxd-component-detail/uxd-component-overview.component';
import { UxdComponentImplementationComponent } from './uxd-components/uxd-component-detail/uxd-component-implementation.component';
import { UxdComponentExamplesComponent } from './uxd-components/uxd-component-detail/uxd-component-examples.component';

export const pageRoutes: Routes = [
  {
    path: 'components',
    component: UxdComponentCategoriesComponent,
  },
  {
    path: 'components/:categoryName',
    component: UxdComponentListComponent,
  },
  {
    path: 'components/:categoryName/:componentName',
    component: UxdComponentDetailComponent,
    children: [
      { path: 'overview', component: UxdComponentOverviewComponent },
      { path: 'implementation', component: UxdComponentImplementationComponent },
      { path: 'examples', component: UxdComponentExamplesComponent },
    ]
  },
  {
    path: 'styles',
    component: UxdStyleCategoriesComponent,
  },
  {
    path: 'styles/:categoryName',
    component: UxdStylesListComponent,
  },
  {
    path: 'styles/:categoryName/:styleName',
    component: UxdStyleDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    UxdComponentsModule,
    UxdStylesModule,
    RouterModule.forChild(pageRoutes),
  ],
  declarations: [],
  exports: [
    UxdComponentsModule,
    UxdStylesModule,
    RouterModule,
  ],
})
export class PagesModule { }
