import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
  RouterEvent,
} from '@angular/router';
import { some } from 'lodash';

import { Navigation } from './navigation';

@Injectable()
export class NavigationService {

  public navigationStatus = new Subject<boolean>();

  constructor(
    private router: Router,
  ) {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => (
          some(Navigation.Events, (navigationEvent) => (
            event instanceof navigationEvent
          ))
        ))
      )
      .subscribe((event) => {
        switch (event.constructor) {
          case NavigationStart: {
            this.navigationStatus.next(true);
            break;
          }
          case NavigationCancel:
          case NavigationError:
          case NavigationEnd: {
            this.navigationStatus.next(false);
            break;
          }
        }
    });
  }

}
