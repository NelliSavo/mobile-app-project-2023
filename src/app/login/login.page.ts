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
export class LoginPage implements OnInit {
//  credentials: FormGroup;

  constructor(){}
//    private fb: FormBuilder,
//    private AuthService: AuthService,
//    private alertController: AlertController,
//    private router: Router,
//    private loadingController: LoadingController
//  ) { }

  ngOnInit() {
}//    this.credentials = this.fb.group({
}//      email:['nelli.savolainen@info.com', [Validators.required, Validators.email]],
//      password:['Nelli90', [ Validators.required, Validators.minLength(6)]],
//    });
    
//  }

//  async login() {
//		const loading = await this.loadingController.create();
//		await loading.present();

//		this.AuthService.login(this.credentials.value).subscribe(
//			async (res: any) => {
//				await loading.dismiss();
//				this.router.navigateByUrl('/tabs', { replaceUrl: true });
//			},
//			async (res: { error: { error: any; }; }) => {
//				await loading.dismiss();
//				const alert = await this.alertController.create({
//					header: 'Login failed',
//					message: res.error.error,
//					buttons: ['OK']
//				});

//				await alert.present();

//      }
//    );
// }     

//get email() {
//  return this.credentials.get('email');
//}
//get password() {
//  return this.credentials.get('password');
//}
//}