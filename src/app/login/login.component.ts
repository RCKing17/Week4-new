import { Component } from '@angular/core';
import { Router } from '@angular/router'
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;
  errorMessage: string = '';

  users = [
    {email: 'user1@gmail.com', password: '123'},
    {email: 'user2@gmail.com', password: '456'},
    {email: 'user3@gmail.com', password: '789'}
  ];

  constructor(private router: Router) { }

  onSubmit(f: NgForm) {
    console.log (f.value);
    const user = this.users.find(({email})=>email === f.value.email);
    if (user) {
      if(user.password === f.value.password){
        this.router.navigate(['/account']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } //else {
    //   this.errorMessage = 'Invalid email or password';
    // }
  }
}
