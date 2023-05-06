import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass'],
})
export class InputComponent {
  @Input('InputType') InputType: string = '' ;
  @Input('InputPlaceholder') InputPlaceholder: string = '' ;
  @Input('InputValue') InputValue: string = '';
  styleInput: string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.InputType === 'button') {
      this.styleInput = 'buttonStyle';
      console.log('es un boton')
    } else {
      this.styleInput = 'inputStyle';
      console.log('es texto')
    }
  }
}
