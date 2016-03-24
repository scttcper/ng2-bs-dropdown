var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var dropdown_demo_1 = require('./dropdown/dropdown-demo');
var DemoApp = (function () {
    function DemoApp() {
    }
    DemoApp = __decorate([
        core_1.Component({
            selector: 'demo-app',
            providers: [],
            templateUrl: 'demo-app/demo-app.html',
            styleUrls: ['demo-app/demo-app.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None,
            pipes: []
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/', name: 'DropdownDemo', component: dropdown_demo_1.DropdownDemo, useAsDefault: true })
        ]), 
        __metadata('design:paramtypes', [])
    ], DemoApp);
    return DemoApp;
})();
exports.DemoApp = DemoApp;
//# sourceMappingURL=../../../demo-app/demo-app.js.map