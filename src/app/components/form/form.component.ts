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
  buttonInput: string = 'button'
  buttonInputValue: string = 'Claim your free trial '
  FirstName: string = 'First Name '
  LastName: string = 'Last Name '
  EmailAddress: string = 'Email Address'
  Password: string = 'Password'
}
