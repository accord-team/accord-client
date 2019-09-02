import {
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from '@angular/router';

export namespace Navigation {

  export type NavigationEvent = NavigationStart | NavigationEnd | NavigationError | NavigationCancel;

  export const Events = [
    NavigationStart,
    NavigationEnd,
    NavigationError,
    NavigationCancel,
  ];
}
