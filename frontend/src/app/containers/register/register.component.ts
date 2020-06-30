import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }
  register(registerForm: NgForm): void {
    if (registerForm.valid) {
      const user: User = registerForm.value;
      this.userService.register(user)
        .subscribe(console.log);
    }
  }
}
