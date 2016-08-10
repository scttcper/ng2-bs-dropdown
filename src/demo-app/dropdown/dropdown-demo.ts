import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-demo',
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
