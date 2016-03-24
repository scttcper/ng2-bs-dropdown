import {Component, ViewEncapsulation} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DropdownDemo} from './dropdown/dropdown-demo';

@Component({
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app/demo-app.html',
  styleUrls: ['demo-app/demo-app.css'],
  directives: [ROUTER_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  pipes: []
})
@RouteConfig([
  new Route({ path: '/', name: 'DropdownDemo', component: DropdownDemo, useAsDefault: true })
])
export class DemoApp { }
