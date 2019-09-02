import { Routes } from '@angular/router';

import { HallGuard } from './hall/hall.guard';
import { HomeGuard } from './home/home.guard';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'hall',
    pathMatch: 'full',
  },
  {
    path: 'hall',
    loadChildren: 'app/hall/hall.module#HallModule',
    canActivate: [ HallGuard ],
    canActivateChild: [ HallGuard ],
  },
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule',
    canActivate: [ HomeGuard ],
    canActivateChild: [ HomeGuard ],
  },
  {
    path: '**',
    redirectTo: 'hall',
  },
];
