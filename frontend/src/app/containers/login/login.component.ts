import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  login(loginForm: NgForm): void {
    if (loginForm.valid){
      console.log(loginForm.value);
    }
  }
}
