import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Auth } from 'resources/auth/auth';
import { User as UserModel } from 'resources/user/user';

@Injectable()
export class AuthService {

  public authState$: Observable<boolean> = of(false);

  constructor() {}

  get user(): boolean {
    return true;
  }

  login({ email, password }: Auth.Credentials) {
    return new Promise((resolve) => {
      this.authState$ = of(true);
      resolve(true);
    });
  }

  register({ email, password, firstName, lastName }: UserModel.FormModel) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.authState$ = of(false);
      resolve(true);
    });
  }

}
