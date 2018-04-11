import { UxdStyleCategoriesComponent } from './pages/uxd-styles/uxd-style-categories/uxd-style-categories.component';
import { UxdComponentsModule } from './pages/uxd-components/uxd-components.module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryModule } from '../../node_modules/cc-component-library/src/lib/library.module';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';

const appRoutes: Routes = [
  { path: 'components', loadChildren: () => UxdComponentsModule},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
,    ),
    LibraryModule,
    NavigationModule,
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
