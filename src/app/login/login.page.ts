import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
    ) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (authenticated) => {
        if (authenticated) {
          // Authentication succeeded, navigate to the home page
          this.router.navigate(['/page1']);
        } else {
          // Authentication failed, show an error message
          this.errorMessage = 'Invalid email or password';
        }
      }
    );
  }
}