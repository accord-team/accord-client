import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

import { AuthService } from 'services/auth/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
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
        ], { optional: true })
      ])
    ]),
  ],
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  public user;

  public tiles;

  public pokemons$: Subscription;

  public testData$;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private apollo: Apollo,
  ) {
    this.user = this.authService.user;
    this.tiles = [...new Array(9)].fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.pokemons$ = this.route.data.subscribe((data) => {
      this.tiles = data.dashboard;
    });
  }

  ngOnDestroy() {
    this.pokemons$.unsubscribe();
  }

}
