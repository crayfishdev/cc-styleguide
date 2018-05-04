import { CardModule } from './card/card.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset/tabset.component';

import { TabsetModule } from './tabset/tabset.module';

@NgModule({
  imports: [
    CommonModule,
    TabsetModule,
    CategoriesModule.forRoot(),
  ],
  declarations: [],
  exports: [TabsetModule, CategoriesModule, CardModule],
})
export class SharedModule {
}
