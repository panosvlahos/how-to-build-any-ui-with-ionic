import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  submitError: string = '';  // Variable to hold the error message

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    // Use AuthService to handle login
    if (this.authService.login(this.email, this.password)) {
      this.submitError = ''; // Clear any previous errors
      this.router.navigate(['/tab1']); // Redirect after login
    } else {
      this.submitError = 'Invalid credentials'; // Set error message if credentials are incorrect
    }
  }
}
