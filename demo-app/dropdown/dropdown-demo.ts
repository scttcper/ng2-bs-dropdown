import {Component} from 'angular2/core';
import {DROPDOWN_DIRECTIVES} from '../../components/dropdown';

@Component({
  selector: 'dropdown-demo',
  directives: [DROPDOWN_DIRECTIVES],
  templateUrl: 'demo-app/dropdown/dropdown-demo.html'
})
export class DropdownDemo { }
