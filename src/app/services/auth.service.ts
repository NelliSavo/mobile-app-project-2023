import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): Observable<boolean> {
    // Replace this with your own authentication logic
    if (email === 'user@example.com' && password === 'password') {
      // Authentication succeeded
      return of(true).pipe(delay(2000)); // Add a delay to simulate a server response
    } else {
      // Authentication failed
      return of(false).pipe(delay(2000)); // Add a delay to simulate a server response
    }
  }
}	
