import { Routes } from '@angular/router';

import { HomeGuard } from './home.guard';
import { HomeComponent } from './home.component';

import { DashboardPageComponent } from './+dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './+profile-page/profile-page.component';

const homeSubRoutes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [ HomeGuard ],
    resolve: { dashboard: 'DashboardResolver' },
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [ HomeGuard ],
    resolve: { dashboard: 'DashboardResolver' },
  },
];

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [ ...homeSubRoutes ],
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
