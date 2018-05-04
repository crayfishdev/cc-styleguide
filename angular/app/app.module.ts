import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryModule } from '../../node_modules/cc-component-library/src/lib/library.module';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { UxdStylesModule } from './pages/uxd-styles/uxd-styles.module';
import { UxdComponentsModule } from './pages/uxd-components/uxd-components.module';

const appRoutes: Routes = [
  { path: 'components', loadChildren: () => UxdComponentsModule},
  { path: 'styles', loadChildren: () => UxdStylesModule},
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
,    ),
    LibraryModule,
    NavigationModule,
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
