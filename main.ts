import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {DemoApp} from './demo-app/demo-app';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

bootstrap(DemoApp, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
