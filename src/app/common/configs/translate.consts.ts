import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { TranslateLoader, TranslateModuleConfig, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizeParser, LocalizeRouterSettings, ManualParserLoader } from 'localize-router';

import { availableLangs } from 'configs/langs.consts';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/locales/', '.json');
}

export function DefaultLangFactory(locales: string[], cachedLang: string, browserLang: string) {
  return locales[0];
}

export function LocalizeParserFactory(translate, location, settings, http) {
  return new ManualParserLoader(translate, location, settings, availableLangs);
}

export const translateConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [ HttpClient ]
  }
};

export const localizeRouterConfig = {
  parser: {
    provide: LocalizeParser,
    useFactory: LocalizeParserFactory,
    deps: [TranslateService, Location, LocalizeRouterSettings]
  },
  alwaysSetPrefix: false,
  useCachedLang: false,
  defaultLangFunction: DefaultLangFactory
};
