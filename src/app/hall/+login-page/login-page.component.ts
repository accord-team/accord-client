import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'services/auth/auth.service';
import { Auth } from 'resources/auth/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public loading = false;

  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public onSubmit({ login, password }) {
    const credentials: Auth.Credentials = {
      email: login,
      password,
    };
    this.loading = true;
    this.error = '';
    this.authService
      .login(credentials)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(({ message }) => {
        console.log(message);
        this.error = message;
      })
      .finally(() => {
        this.loading = false;
      });
  }

}
