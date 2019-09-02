import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'services/auth/auth.service';
import { take, map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class HallGuard implements CanActivate, CanActivateChild {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return this.canNavigate();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {
    return this.canNavigate();
  }

  private canNavigate(): Observable<boolean> | boolean {
    return this.authService.authState$.pipe(
      take(1),
      map(user => !user),
      tap((isNotLogged) => {
        if (!isNotLogged) {
          this.router.navigate(['/home']);
        }
      }),
      catchError(() => of(true))
    );
  }

}
