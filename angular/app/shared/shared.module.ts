import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset/tabset.component';

import { TabsetModule } from './tabset/tabset.module';

@NgModule({
  imports: [
    CommonModule,
    TabsetModule,
  ],
  declarations: [],
  exports: [TabsetModule],
})
export class SharedModule { }
