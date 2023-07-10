import { Injectable } from '@angular/core';
import {Book} from "../interface/Book";

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(): Book[]{
    return [
      {
        name:  "clean code for professional programmers",
        author: "robert c. martin",
        image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SY466_.jpg",
        amount: 24.99,
      },
      {
        name:  "pragmatic programmer for professional and beginner programmers",
        author: "david thomas",
        image: "https://m.media-amazon.com/images/I/71f743sOPoL._SY466_.jpg",
        amount: 19.99,
      },
      {
        name:  "The Art of Computer Programming: Volume 1",
        author: "Donald E. Knuth",
        image: "https://m.media-amazon.com/images/I/71++Mc6LvEL._SY466_.jpg",
        amount: 39.99,
      },
      {
        name:  "The Clean Coder: A Code of Conduct for Professional Programmers",
        author: "Robert C. Martin",
        image: "https://m.media-amazon.com/images/I/51uO-K+V5dL._SY466_.jpg",
        amount: 20.99,
      },
      {
        name:  "JavaScript from Beginner to Professional:",
        author: "Laurence Lars Svekis",
        image: "https://m.media-amazon.com/images/I/71oZ45OrLjL._SY466_.jpg",
        amount: 17.99,
      }

    ]
  }
}
