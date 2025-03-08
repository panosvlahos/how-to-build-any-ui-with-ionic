import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Import your AuthService for creating the user
import { Router } from '@angular/router'; // Import Router to navigate

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  createUser() {
    // Assuming your AuthService has a function to create a user
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    // Call your AuthService to create the user (You can call the API here)
    this.authService.createUser(user).subscribe(
      (response) => {
        // Handle success, you can redirect the user to the login page or dashboard
        console.log('User created successfully', response);
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      (error) => {
        // Handle error
        console.error('Error creating user:', error);
      }
    );
  }
}
