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
    if (email === 'user@example.com' && password === 'password') {
      return of(true).pipe(delay(2000)); 
    } else {
      return of(false).pipe(delay(2000));
    }
  }
}	
