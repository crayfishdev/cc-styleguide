
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsetModule } from './tabset/tabset.module';
import { PaneComponent } from './pane/pane.component';
import { CardModule } from './card/card.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { AccordianModule } from './accordian/accordian.module';
@NgModule({
  imports: [
    CommonModule,
    TabsetModule,
    CategoriesModule.forRoot(),
    AccordianModule,
  ],
  declarations: [PaneComponent],
  exports: [TabsetModule, CategoriesModule, CardModule, PaneComponent, AccordianModule],
})
export class SharedModule {
}
