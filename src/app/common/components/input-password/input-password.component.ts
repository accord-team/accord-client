import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent {

  @Input() control: FormControl;

  @Input() label: string;

  @Input() placeholder: string;

  public inputType = 'password';

  public iconColor = '';

  public togglePasswordVisibility() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
    this.iconColor = this.inputType === 'password' ? '' : 'primary';
  }

}
