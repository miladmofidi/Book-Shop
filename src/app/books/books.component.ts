import {Component, OnInit} from '@angular/core';
import {Book} from "../interface/Book";
import {BooksService} from "./books.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  constructor(private booksService :BooksService) {
  }


  books: Book[] = [] ;
  isShowing: boolean = true;
  cart: Book[]= [];

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }


  toggleBooks() {
    this.isShowing = !this.isShowing;
  }

}

