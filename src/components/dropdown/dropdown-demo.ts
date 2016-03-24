import {Component} from 'angular2/core';
import {DROPDOWN_DIRECTIVES} from './dropdown';

@Component({
  selector: 'dropdown-demo',
  directives: [DROPDOWN_DIRECTIVES],
  templateUrl: 'components/dropdown/dropdown-demo.html'
})
export class DropdownDemo { }