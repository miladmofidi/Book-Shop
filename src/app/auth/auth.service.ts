import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {LoginForm, RegisterForm} from "../interface/Auth";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;



  constructor(private router: Router,  private toastr: ToastrService) {
  }

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
       this.isAuthenticated = true;
       this.router.navigate(['']);
       this.toastr.success("Successfully Login","Login",{timeOut: 3000})

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        this.toastr.error("Credentials is not matched", "Login Failed!",{timeOut: 3000})
      }).finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (form.password != form.confirm_password){
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;

      }).finally( () => (this.isLoading = false));
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then( () =>{
      this.router.navigate(['login'])
      this.isAuthenticated = false;

    }).catch( (error) =>{

    });
  }





}
