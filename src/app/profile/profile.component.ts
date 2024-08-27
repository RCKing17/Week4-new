// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [],
//   templateUrl: './profile.component.html',
//   styleUrl: './profile.component.css'
// })
// export class ProfileComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/login']);
    }
  }

  saveProfile() {
    sessionStorage.setItem('user', JSON.stringify(this.user));
    alert('Profile updated successfully!');
  }
}
