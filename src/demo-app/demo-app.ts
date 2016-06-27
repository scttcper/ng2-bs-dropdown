import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {DropdownDemo} from './dropdown/dropdown-demo';
import {DropdownInput} from './dropdown-input/dropdown-input';

@Component({
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app/demo-app.html',
  styleUrls: ['demo-app/demo-app.css'],
  directives: [DropdownDemo, DropdownInput],
  encapsulation: ViewEncapsulation.None,
  pipes: [],
})
export class DemoApp {
  constructor() { }
}
