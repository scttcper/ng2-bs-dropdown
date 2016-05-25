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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var Dropdown = (function () {
    function Dropdown(cl) {
        var _this = this;
        this.open = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.isOpen = false;
        this.isMobileOpen = false;
        this.open.subscribe(function () {
            _this.isOpen = true;
        });
        this.close.subscribe(function () {
            _this.isOpen = false;
        });
        var open = cl.includes('open');
        if (open) {
            this.open.emit(null);
        }
    }
    Dropdown.prototype.backdropClick = function (event) {
        if (this.isOpen) {
            this.close.emit(null);
            event.stopPropagation();
        }
    };
    Dropdown.prototype.documentClick = function (event) {
        if (this.isOpen) {
            this.close.emit(null);
        }
    };
    Dropdown.prototype.ontouchend = function () {
        this.isMobileOpen = true;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Dropdown.prototype, "open", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Dropdown.prototype, "close", void 0);
    Dropdown = __decorate([
        core_1.Component({
            selector: '.dropdown',
            host: {
                '(touchend)': 'ontouchend($event)',
                '(document:click)': 'documentClick($event)',
                '[class.open]': 'isOpen',
            },
            template: "\n    <div *ngIf=\"isMobileOpen && isOpen\" (click)=\"backdropClick($event)\" class=\"dropdown-backdrop\"></div>\n    <ng-content></ng-content>\n  ",
        }),
        __param(0, core_1.Attribute('class')), 
        __metadata('design:paramtypes', [String])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
var DropdownToggle = (function () {
    function DropdownToggle(dropdown, cl) {
        this.dropdown = dropdown;
        this.disabled = null;
        this.disabled = cl.includes('disabled');
    }
    DropdownToggle.prototype.setMousedown = function (e) {
        // e.stopPropagation();
        // ignore disabled clicks
        if (this.disabled) {
            return;
        }
        ;
        if (this.dropdown.isOpen) {
            this.dropdown.close.emit(null);
        }
        else {
            this.dropdown.open.emit(null);
        }
    };
    Object.defineProperty(DropdownToggle.prototype, "isAriaExpanded", {
        get: function () {
            return this.dropdown.isOpen ? 'true' : 'false';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('attr.aria-expanded'), 
        __metadata('design:type', String)
    ], DropdownToggle.prototype, "isAriaExpanded", null);
    DropdownToggle = __decorate([
        core_1.Directive({
            selector: '.dropdown-toggle',
            host: {
                '(click)': 'setMousedown($event)',
                '[class.active]': 'dropdown.isOpen',
                '[attr.aria-haspopup]': 'true'
            }
        }),
        __param(0, core_1.Host()),
        __param(1, core_1.Attribute('class')), 
        __metadata('design:paramtypes', [Dropdown, String])
    ], DropdownToggle);
    return DropdownToggle;
}());
exports.DropdownToggle = DropdownToggle;
exports.DROPDOWN_DIRECTIVES = [Dropdown, DropdownToggle];
//# sourceMappingURL=/Users/scoope7/ng2-bs-dropdown/tmp/broccoli_type_script_compiler-input_base_path-6ErV4cpt.tmp/0/components/dropdown/dropdown.js.map