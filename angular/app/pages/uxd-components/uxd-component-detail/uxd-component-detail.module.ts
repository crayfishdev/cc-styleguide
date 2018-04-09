import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UxdComponentDetailComponent } from './uxd-component-detail.component';
import { UxdComponentOverviewComponent } from './uxd-component-overview.component';
import { UxdComponentImplementationComponent } from './uxd-component-implementation.component';
import { UxdComponentExamplesComponent } from './uxd-component-examples.component';
import { SharedModule } from '../../../shared/shared.module';

const detailRoutes: Routes = [

];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
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
    // RouterModule,
  ]
})
export class UxdComponentDetailModule { }
