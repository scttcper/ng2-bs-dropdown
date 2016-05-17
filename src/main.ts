import {bootstrap} from '@angular/platform-browser-dynamic';
import {DemoApp} from './demo-app/demo-app';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {Renderer} from '@angular/core';
import 'rxjs/Rx';

bootstrap(DemoApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  Renderer,
]);
