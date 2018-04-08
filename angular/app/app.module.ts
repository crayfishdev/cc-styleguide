import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryModule } from '../../node_modules/cc-component-library/src/lib/library.module';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { PagesModule } from './pages/pages.module';

const appRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
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
    PagesModule,
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
