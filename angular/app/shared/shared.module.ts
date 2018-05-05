
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsetModule } from './tabset/tabset.module';
import { PaneComponent } from './pane/pane.component';
import { CardModule } from './card/card.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
@NgModule({
  imports: [
    CommonModule,
    TabsetModule,
    CategoriesModule.forRoot(),
  ],
  declarations: [PaneComponent],
  exports: [TabsetModule, CategoriesModule, CardModule, PaneComponent],
})
export class SharedModule {
}
