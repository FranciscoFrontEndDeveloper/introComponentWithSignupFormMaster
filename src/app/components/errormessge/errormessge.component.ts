import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errormessge',
  templateUrl: './errormessge.component.html',
  styleUrls: ['./errormessge.component.sass'],
})
export class ErrormessgeComponent {
  @Input('inputMessageName') inputMessageName = '';
}
