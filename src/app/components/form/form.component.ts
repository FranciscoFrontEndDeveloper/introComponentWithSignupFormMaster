import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent {
  textInput: string = 'text';
  emailInput: string = 'email';
  passwordInput: string = 'password';
  FirstName: string = 'First Name ';
  LastName: string = 'Last Name ';
  EmailAddress: string = 'Email Address';
  Password: string = 'Password';
  formSignUp: any;
  submitted: boolean = false;
  requiredValue: string = '';
  styleInputRequired: string = '';
  inputFirtsNameValid!: boolean;
  inputLastNameValid: boolean = false;
  inputEmailValid: boolean = false;
  inputPasswordValid: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.createFormSignUp();
  }

  createFormSignUp() {
    this.formSignUp = this.formBuilder.group({
      firtsname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmitSignUp() {
    console.log(this.formSignUp.controls['email']._rawValidators);
    if (this.formSignUp.invalid) {
      this.inputFirtsNameValid = this.formSignUp.controls['firtsname'].invalid;
      this.inputLastNameValid = this.formSignUp.controls['lastname'].invalid;
      this.inputEmailValid = this.formSignUp.controls['email'].invalid;
      this.inputPasswordValid = this.formSignUp.controls['password'].invalid;
      this.styleInputRequired = 'inputRequired';
      this.EmailAddress = 'email@example/com';
    } else if (this.formSignUp.valid) {
      this.inputFirtsNameValid = this.formSignUp.controls['firtsname'].invalid;
      this.inputLastNameValid = this.formSignUp.controls['lastname'].invalid;
      this.inputEmailValid = this.formSignUp.controls['email'].invalid;
      this.inputPasswordValid = this.formSignUp.controls['password'].invalid;
      this.styleInputRequired = 'inputStyle';
    }
  }
}
