import {Component, OnInit} from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {LoginForm, RegisterForm} from "../../interface/Auth";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: ''
  };

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  submit(){
    this.authService.register(this.form);

  }
  isLoading(){
    return this.authService.isLoading;
  }

}
