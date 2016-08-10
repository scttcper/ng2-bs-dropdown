import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownDemo } from './dropdown/dropdown-demo';
import { DropdownInput } from './dropdown-input/dropdown-input';
import { BsDropdownModule } from '../components/dropdown/dropdown';


@Component({
  selector: 'demo-app',
  templateUrl: 'demo-app/demo-app.html',
  styleUrls: ['demo-app/demo-app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DemoApp {
  constructor() { }
}



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule
  ],
  declarations: [
    // Components / Directives/ Pipes
    DropdownInput,
    DropdownDemo,
  ],
  exports: [
    DropdownInput,
    DropdownDemo,
  ]
})
export class DemoModule {}
