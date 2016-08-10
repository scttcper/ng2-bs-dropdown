import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx';

import { DemoApp } from './demo-app/demo-app';
import { BsDropdownModule } from './components/dropdown/dropdown';
import { DropdownDemo } from './demo-app/dropdown/dropdown-demo';
import { DropdownInput } from './demo-app/dropdown-input/dropdown-input';

@NgModule({
  bootstrap: [
    DemoApp
  ],
  declarations: [
    DemoApp,
    DropdownDemo,
    DropdownInput
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule,
  ],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
