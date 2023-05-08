import { FormGroup, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  textInput: string = 'text'
  emailInput: string = 'email'
  passwordInput: string = 'password'
  FirstName: string = 'First Name '
  LastName: string = 'Last Name '
  EmailAddress: string = 'Email Address'
  Password: string = 'Password'
  formSignUp: any;

  constructor(private formBuilder: FormBuilder) {
    this.formSignUp = this.formBuilder.group({
      firtsname: '',
      lastname: '',
      email: '',
      password: '',
    })
  }

  onSubmitSignUp() {
    this.formSignUp.value
  }
}
