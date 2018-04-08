import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryModule } from '../../node_modules/cc-component-library/src/lib/library.module';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';


@NgModule({
  imports: [
    BrowserModule,
    LibraryModule,
    NavigationModule,
  ],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
