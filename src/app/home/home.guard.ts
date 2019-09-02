import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'services/auth/auth.service';
import { take, map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class HomeGuard implements CanActivate, CanActivateChild {

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
      map(user => !!user),
      tap((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['/hall']);
        }
      }),
      catchError(() => of(false))
    );
  }

}
