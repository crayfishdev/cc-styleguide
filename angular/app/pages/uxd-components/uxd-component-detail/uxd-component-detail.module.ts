import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UxdComponentDetailComponent } from './uxd-component-detail.component';
import { UxdComponentOverviewComponent } from './uxd-component-overview.component';
import { UxdComponentImplementationComponent } from './uxd-component-implementation.component';
import { UxdComponentExamplesComponent } from './uxd-component-examples.component';
import { SharedModule } from '../../../shared/shared.module';

const detailRoutes: Routes = [
  { path: '',
    component: UxdComponentDetailComponent,
    children: [
      { path: 'overview', component: UxdComponentOverviewComponent },
      { path: 'implementation', component: UxdComponentImplementationComponent },
      { path: 'examples', component: UxdComponentExamplesComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(detailRoutes)
  ],
  declarations: [
    UxdComponentDetailComponent,
    UxdComponentOverviewComponent,
    UxdComponentImplementationComponent,
    UxdComponentExamplesComponent
  ],
  exports: [
    UxdComponentDetailComponent,
    UxdComponentOverviewComponent,
    UxdComponentImplementationComponent,
    UxdComponentExamplesComponent,
    RouterModule,
  ]
})
export class UxdComponentDetailModule { }
