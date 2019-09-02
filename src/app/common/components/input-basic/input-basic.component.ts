import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { mapValues, values } from 'lodash';

import { validationMessages } from '../../constants/validation-messages.consts';

@Component({
  selector: 'app-input-basic',
  templateUrl: './input-basic.component.html',
  styleUrls: ['./input-basic.component.scss'],
})
export class InputBasicComponent implements OnChanges {

  @Input() control: FormControl;

  @Input() label: string;

  @Input() placeholder: string;

  @Input() type = 'text';

  @Input() error: string;

  constructor(
    private translate: TranslateService,
  ) {}

  ngOnChanges() {
    if (this.error) {
      this.control.setErrors({
        incorrect: true,
      });
    }
  }

  public getErrorMessages(): string[] {
    const errorMessages = values(mapValues(this.control.errors, (error, key) => (
      this.translate.instant(validationMessages[key] || this.error, error)
    )));

    return errorMessages;
  }

}
