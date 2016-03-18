import {Component, ViewEncapsulation} from 'angular2/core';
import {Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dir} from '../core/rtl/dir';


@Component({
  selector: 'home',
  templateUrl: 'demo-app/home.html'
})
export class Home {}

@Component({
  selector: 'demo-app',
  providers: [],
  templateUrl: 'demo-app/demo-app.html',
  styleUrls: ['demo-app/demo-app.css'],
  directives: [ROUTER_DIRECTIVES, Dir],
  encapsulation: ViewEncapsulation.None,
  pipes: []
})
@RouteConfig([
  new Route({path: '/', name: 'Home', component: Home, useAsDefault: true})
])
export class DemoApp { }
