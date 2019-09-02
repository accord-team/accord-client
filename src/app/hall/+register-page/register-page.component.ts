import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from 'services/auth/auth.service';
import { User } from 'resources/user/user';
import { defaultSnackbarOptions } from 'configs/snackbar.consts';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  public loading = false;

  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private matSnackBar: MatSnackBar,
  ) { }

  public onSubmit({ login, password, firstName, lastName }) {
    const data: User.FormModel = {
      email: login,
      password,
      firstName,
      lastName,
    };
    this.loading = true;
    this.error = '';
    this.authService
      .register(data)
      .then(() => {
        const userCreatedMessage = this.translate.instant('Użytkownik został utworzony.');
        this.matSnackBar.open(userCreatedMessage);
        this.router.navigate(['/home']);
      })
      .catch(({ message }) => {
        this.error = message;
      })
      .finally(() => {
        this.loading = false;
      });
  }

}
