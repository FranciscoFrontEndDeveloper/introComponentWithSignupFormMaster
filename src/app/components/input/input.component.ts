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
    this.inputValueForm = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void {  }
  @Input('InputType') InputType: string = '';
  @Input('InputPlaceholder') InputPlaceholder: string = '';
  @Input('InputValue') InputValue: string = '';
  styleInput: string = '';
  ngOnInit(): void {
  }
}
