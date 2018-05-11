import { ApiConfigService } from './../config/api-config.service';
import { CategoriesService } from './categories.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [ApiConfigService]
})
export class CategoriesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CategoriesModule,
      providers: [ CategoriesService ]
    };
  }
 }
