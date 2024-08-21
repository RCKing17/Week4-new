import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const sessionToken = sessionStorage.getItem('sessionToken');
    if (!sessionToken) {
      this.router.navigate(['/login']);
    } else {
      this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
    }
  }

  saveProfile(): void {
    sessionStorage.setItem('user', JSON.stringify(this.user));
    alert('Profile updated successfully!');
  }
}
