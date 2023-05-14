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
  complementMessaje: string = 'kkkd';

  constructor(private formBuilder: FormBuilder) {
    this.createFormSignUp();
  }

  createFormSignUp() {
    this.formSignUp = this.formBuilder.group({
      firtsname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });

    // this.formSignUp.controls['firtsname'].valueChanges.suscribe((data: any) => {
    //   console.log(data)
    // });
  }

  onSubmitSignUp() {
    console.group('email');
    // console.log(this.formSignUp.controls['firtsname'].status === "INVALID");
    // console.log(this.formSignUp.controls['lastname'].status === "INVALID");
    // console.log(this.formSignUp.controls['email'].status === "INVALID");
    // console.log(this.formSignUp.controls['password'].status === "INVALID");

    console.log(this.formSignUp.controls['firtsname'].invalid);
    console.log(this.formSignUp.controls['lastname'].invalid);
    console.log(this.formSignUp.controls['email'].invalid);
    console.log(this.formSignUp.controls['password'].invalid);
    console.groupEnd();
    // console.log(this.formSignUp.valid);
    if (this.formSignUp.valid) {
      this.submitted = false;
    } else {
      // this.submitted = true;
      this.EmailAddress = 'email@example/com';
    }
  }
}
