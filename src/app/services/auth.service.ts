import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; // Import catchError from rxjs/operators
import { throwError } from 'rxjs'; // Import throwError from rxjs
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false; // Store the authentication state
  private validEmail = 'admin'; // Example valid email
  private validPassword = '123'; // Example valid password
  private apiUrl = 'https://azureapi-euapduhzgpb2avb9.canadacentral-01.azurewebsites.net/api/User/create';
  //private apiUrl = 'https://localhost:7004/api/User/create';
  
  constructor(private http: HttpClient) {}

  login(email: string, password: string): boolean {
    // Check if email and password are correct
    if (email === this.validEmail && password === this.validPassword) {
      this.isAuthenticated = true;  // Set authentication state to true
      return true;
    }
    return false; // If invalid credentials, return false
  }

  logout(): void {
    this.isAuthenticated = false; // Log out and set authentication state to false
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated; // Return the current login state
  }

  createUser(user: any): Observable<any> {
    console.log(user);
    return this.http.post(`${this.apiUrl}`, user,{ withCredentials: true }).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(error); // Rethrow the error to handle it in the component
      })
    );
  }
}
