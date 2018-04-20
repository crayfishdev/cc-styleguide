import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryModule } from '../../node_modules/cc-component-library/src/lib/library.module';
import { AppComponent } from './app.component';
import { InternalButtonComponent } from './internal-button/internal-button.component';


@NgModule({
  declarations: [
    AppComponent,
    InternalButtonComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
