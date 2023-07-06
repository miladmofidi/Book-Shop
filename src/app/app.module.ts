import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import {FormsModule} from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import {BooksModule} from "./books/books.module";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
