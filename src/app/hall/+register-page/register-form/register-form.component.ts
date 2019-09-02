import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'resources/user/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  @Input() loading: boolean;

  @Input() error: string;

  @Output() onSubmit = new EventEmitter<User.FormModel>();

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
      firstName: [''],
      lastName: [''],
    });
  }

  public onFormSubmit() {
    this.onSubmit.emit(this.formGroup.value);
  }

}
