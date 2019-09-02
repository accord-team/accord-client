import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Auth } from 'resources/auth/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() loading: boolean;

  @Input() error: string;

  @Output() onSubmit = new EventEmitter<Auth.Credentials>();

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      login: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ])],
      password: ['', Validators.required],
    });
  }

  public onFormSubmit() {
    this.onSubmit.emit(this.formGroup.value);
  }

}
