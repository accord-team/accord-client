import { Component, OnDestroy } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';
import { Subscription } from 'rxjs';

import { NavigationService } from 'services/navigation/navigation.service';

@Component({
  selector: 'app-glass-layer',
  templateUrl: './glass-layer.component.html',
  styleUrls: ['./glass-layer.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ])
  ],
})
export class GlassLayerComponent implements OnDestroy {

  public isVisible = false;

  private subscription: Subscription;

  constructor(
    private navigationService: NavigationService,
  ) {
    this.subscription = this.navigationService
      .navigationStatus
      .subscribe((isNavigating: boolean) => {
        this.isVisible = isNavigating;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
