import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx';

import { DemoModule, DemoApp } from './demo-app/demo-app';
import { BsDropdownModule } from './components/dropdown/dropdown';

@NgModule({
  bootstrap: [
    DemoApp
  ],
  declarations: [
    DemoApp
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BsDropdownModule,
    DemoModule,
  ],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
