import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryModule } from '../../node_modules/cc-component-library/src/lib/library.module';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    LibraryModule,
    HeaderModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
