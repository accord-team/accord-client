import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from '../environments/environment';

import { ComponentsModule } from 'components/components.module';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';

import { translateConfig, localizeRouterConfig } from 'configs/translate.consts';
import { appRoutes } from './app.routing';

const modules = [
  SharedModule,
  ComponentsModule,
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
  Ng2DeviceDetectorModule,
  RouterModule.forRoot(appRoutes),
  LocalizeRouterModule.forRoot(appRoutes, localizeRouterConfig),
  TranslateModule.forRoot(translateConfig),
  ApolloModule,
  HttpLinkModule,
  CommonModule,
];

const components = [
  AppComponent,
];

import { guards } from 'app/guards';
import { services } from 'app/services';

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
  ],
  providers: [
    ...guards,
    ...services,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    public apollo: Apollo,
    public httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({uri: 'https://graphql-pokemon.now.sh/graphql'}),
      cache: new InMemoryCache(),
    });
  }
}
