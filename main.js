"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var demo_app_1 = require('./demo-app/demo-app');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
require('rxjs/Rx');
platform_browser_dynamic_1.bootstrap(demo_app_1.DemoApp, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.Renderer,
]);
//# sourceMappingURL=main.js.map