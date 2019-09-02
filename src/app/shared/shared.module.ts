import { NgModule } from '@angular/core';

// shared MODULES shared with other modules witch imports shared.module
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const sharedModules = [
  HttpModule,
  ReactiveFormsModule,
  RouterModule,
  TranslateModule
];

// required MODULES by shared declarations
// modules required by shared declarations, only for SharedModule use
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

const requiredModules = [
  CommonModule,
  MatIconModule,
  ReactiveFormsModule,
  RouterModule,
  TranslateModule
];

// shared COMPONENTS
const components = [];

// shared DIRECTIVES
import { directives } from 'app/directives';

// shared PIPES
import { pipes } from 'app/pipes';

// shared MODULE
@NgModule({

  imports: [
    ...requiredModules
  ],

  exports: [
    ...sharedModules,
    ...pipes,
    ...directives,
    ...components
  ],

  declarations: [
    ...pipes,
    ...directives,
    ...components
  ],

  entryComponents: []

})
export class SharedModule {
}
