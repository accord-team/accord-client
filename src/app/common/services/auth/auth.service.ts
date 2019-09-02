import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';

import { Auth } from 'resources/auth/auth';
import { User as UserModel } from 'resources/user/user';

@Injectable()
export class AuthService {

  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(
    private fireAuth: AngularFireAuth
  ) {}

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({ email, password }: Auth.Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register({ email, password, firstName, lastName }: UserModel.FormModel) {
    return this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password).then((data) => {
        return this.user.updateProfile({
          displayName: `${firstName} ${lastName}`,
        });
      });
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

}
