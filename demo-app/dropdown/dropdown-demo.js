"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dropdown_1 = require('../../components/dropdown/dropdown');
var DropdownDemo = (function () {
    function DropdownDemo() {
        this.isOpen = false;
    }
    DropdownDemo.prototype.doSomething = function () {
        console.log('something');
    };
    DropdownDemo.prototype.flip = function (status) {
        this.isOpen = !this.isOpen;
        console.log(status);
    };
    DropdownDemo = __decorate([
        core_1.Component({
            selector: 'dropdown-demo',
            directives: [dropdown_1.DROPDOWN_DIRECTIVES],
            templateUrl: 'demo-app/dropdown/dropdown-demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownDemo);
    return DropdownDemo;
}());
exports.DropdownDemo = DropdownDemo;
//# sourceMappingURL=/Users/scoope7/ng2-bs-dropdown/tmp/broccoli_type_script_compiler-input_base_path-6ErV4cpt.tmp/0/demo-app/dropdown/dropdown-demo.js.map