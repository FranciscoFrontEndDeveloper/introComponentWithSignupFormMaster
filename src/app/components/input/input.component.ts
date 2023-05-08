import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  inputValueForm = '';

  private onChangeFn!: Function;

  changeText($event: any): void {
    this.onChangeFn($event.target.value);
  }

  writeValue(value: string): void {
    // throw new Error('Method not implemented.');
    this.inputValueForm = value;
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }
  @Input('InputType') InputType: string = '';
  @Input('InputPlaceholder') InputPlaceholder: string = '';
  @Input('InputValue') InputValue: string = '';
  styleInput: string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.InputType === 'submit') {
      this.styleInput = 'buttonStyle';
      console.log('es un boton')
    } else {
      this.styleInput = 'inputStyle';
      console.log('es texto')
    }
  }
}
