import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private AuthSvc:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const {email, password} = this.registerForm.value;
    console.log('form ->',this.registerForm.value);
    try {
      this.AuthSvc.register(email, password);
      //redirec login
      this.router.navigate(['/']);
      
    } catch (error) {
      console.log(error);
    }
  }
}
