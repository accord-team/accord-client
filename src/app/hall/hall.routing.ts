import { Routes } from '@angular/router';

import { HallGuard } from './hall.guard';
import { HallComponent } from './hall.component';

import { LoginPageComponent } from './+login-page/login-page.component';
import { RegisterPageComponent } from './+register-page/register-page.component';

const hallSubRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [ HallGuard ],
    },
    {
        path: 'register',
        component: RegisterPageComponent,
        canActivate: [ HallGuard ],
    },
];

export const hallRoutes: Routes = [
    {
        path: '',
        component: HallComponent,
        children: [ ...hallSubRoutes ],
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];
