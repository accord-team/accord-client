import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { AuthService } from 'services/auth/auth.service';
import { SideMenu } from 'types/side-menu/side-menu';

@Component({
  selector: 'app-home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public menuItems: SideMenu.Item[];

  constructor(
    private authService: AuthService,
    private translate: TranslateService,
    private router: Router,
  ) {
    this.menuItems = [{
      id: 'dashboard',
      label: this.translate.instant('Dashboard'),
      icon: 'dashboard',
      onClick: () => {
        this.router.navigate(['/home/dashboard']);
      },
    }, {
      id: 'profile',
      label: this.translate.instant('Profil'),
      icon: 'account_box',
      onClick: () => {
        this.router.navigate(['/home/profile']);
      },
    }, {
      id: 'logout',
      label: this.translate.instant('Wyloguj'),
      icon: 'exit_to_app',
      onClick: () => {
        this.authService
          .logout()
          .then(() => {
            this.router.navigate(['/hall']);
          });
      },
    }];
  }

}
