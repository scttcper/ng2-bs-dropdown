import {Component} from '@angular/core';
import {DROPDOWN_DIRECTIVES} from '../../components/dropdown/dropdown';

@Component({
  selector: 'dropdown-demo',
  directives: [DROPDOWN_DIRECTIVES],
  templateUrl: 'demo-app/dropdown/dropdown-demo.html'
})
export class DropdownDemo {
  isOpen = false;
  doSomething() {
    console.log('something');
  }
  flip(status: string) {
    this.isOpen = !this.isOpen;
    console.log(status);
  }
}
