import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from 'components/components.module';

import { homeRoutes } from './home.routing';

const modules = [
  ComponentsModule,
  CommonModule,
  RouterModule.forChild(homeRoutes),
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

import { HomeComponent } from './home.component';
import { DashboardPageComponent } from './+dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './+profile-page/profile-page.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';

// COMPONENTS
const components = [
  HomeComponent,
  DashboardPageComponent,
  ProfilePageComponent,
  SideMenuComponent,
  TopBarComponent,
];

import { DashboardResolver } from './+dashboard-page/dashboard.resolver';

// RESOLVERS
const resolvers = [
  { provide: 'DashboardResolver', useClass: DashboardResolver },
];

@NgModule({
  providers: [
    ...resolvers,
  ],
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
})
export class HomeModule { }
