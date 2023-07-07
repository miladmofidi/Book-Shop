import {Component, OnInit} from '@angular/core';
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase.config";
import {AuthService} from "./auth/auth.service";
import {CartService} from "./services/cart.service";
import {Book} from "./interface/Book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Book Shop';

  constructor(private authService: AuthService, private cartService: CartService) {
  }

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }

  getCart(): Book[] {
    return this.cartService.get();
  }
}
