import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  name1: string= "Clean Code";
  author1: string="Robert C. Martin";
  src1: string="https://m.media-amazon.com/images/I/41xShlnTZTL._SY466_.jpg";

  name2: string= "Pragmatic Programmer";
  author2: string="David Thomas";
  src2: string="https://m.media-amazon.com/images/I/71f743sOPoL._SY466_.jpg";

  myName: string='';
  isShowing: boolean = true;

  ngOnInit(): void {
  }


  toggleBooks() {
    this.isShowing = !this.isShowing;
  }
}
