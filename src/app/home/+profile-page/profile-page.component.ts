import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'services/auth/auth.service';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.tile', [
          style({ opacity: 0, transform: 'scale(0.2)' }),
          stagger(30, [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'scale(1.05)' })),
          ]),
          stagger(40, [
            animate('100ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'scale(1)' })),
          ])
        ])
      ])
    ]),
  ],
})
export class ProfilePageComponent {

  public user;

  public tiles;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.user = this.authService.user;
    this.tiles = [...new Array(9)].fill(0).map((x, i) => i);
  }

}
