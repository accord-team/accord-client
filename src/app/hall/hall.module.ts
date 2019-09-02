import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from 'components/components.module';

import { hallRoutes } from './hall.routing';

const modules = [
  ComponentsModule,
  CommonModule,
  RouterModule.forChild(hallRoutes),
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

import { HallComponent } from './hall.component';
import { LoginPageComponent } from './+login-page/login-page.component';
import { LoginFormComponent } from './+login-page/login-form/login-form.component';
import { RegisterPageComponent } from './+register-page/register-page.component';
import { RegisterFormComponent } from './+register-page/register-form/register-form.component';

// COMPONENTS
const components = [
  HallComponent,
  LoginPageComponent,
  LoginFormComponent,
  RegisterPageComponent,
  RegisterFormComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
})
export class HallModule { }
