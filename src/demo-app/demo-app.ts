import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
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
@Routes([
  new Route({ path: '/', component: DropdownDemo })
])
export class DemoApp implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.navigate(['/']);
  }
}
