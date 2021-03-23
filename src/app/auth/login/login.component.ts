import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private AuthSvc:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email, password} = this.loginForm.value;
    console.log('form ->',this.loginForm.value);
    try {
      const user = this.AuthSvc.login(email, password);
      if(user){
        //Redirect to home page
        console.log("imprimo",user);
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
