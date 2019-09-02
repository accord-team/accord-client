import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { allUsers } from './users.graphql';

import { User } from 'types/user/user';

@Injectable()
export class DashboardResolver implements Resolve<User.List> {

  constructor(
    public apollo: Apollo
  ) {}

  resolve(): Observable<User.List> {
    return this.apollo.query<User.Response>({
      query: allUsers,
    })
      .pipe(
        map(result => result.data.usersAll)
      );
  }

}
