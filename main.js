var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var demo_app_1 = require('./demo-app/demo-app');
var router_1 = require('angular2/router');
browser_1.bootstrap(demo_app_1.DemoApp, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=../../main.js.map