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
var platform_browser_1 = require('@angular/platform-browser');
var DropdownItem = (function () {
    function DropdownItem(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    DropdownItem.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
    };
    DropdownItem = __decorate([
        core_1.Directive({
            selector: '.dropdown-item:not(.disabled)',
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], DropdownItem);
    return DropdownItem;
}());
exports.DropdownItem = DropdownItem;
var Dropdown = (function () {
    function Dropdown() {
        var _this = this;
        this.open = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.isOpen = false;
        this.focusIndex = -1;
        this.open.subscribe(function () {
            _this.isOpen = true;
        });
        this.close.subscribe(function () {
            _this.isOpen = false;
        });
    }
    Dropdown.prototype.backdropClick = function (event) {
        if (this.isOpen) {
            this.close.emit(undefined);
            event.stopPropagation();
        }
    };
    Dropdown.prototype.handleClick = function (event) {
        // not disabled link
        if (event.target.classList.contains('disabled'))
            return;
        // not text area
        if (/input|textarea/i.test(event.target.tagName))
            return;
        this.close.emit(undefined);
    };
    Dropdown.prototype.handleEscape = function (event) {
        if (/input|textarea/i.test(event.target.tagName))
            return;
        if (this.isOpen) {
            this.close.emit(undefined);
        }
        event.preventDefault();
        event.stopPropagation();
    };
    Dropdown.prototype.handleArrow = function (event, move) {
        if (/input|textarea/i.test(event.target.tagName))
            return;
        this.focusIndex += move;
        var items = this.children.toArray();
        if (!items.length) {
            return;
        }
        // restrain to available elements
        if (this.focusIndex > items.length - 1)
            this.focusIndex = items.length - 1;
        if (this.focusIndex < 0)
            this.focusIndex = 0;
        items[this.focusIndex].focus();
        event.stopPropagation();
        event.preventDefault();
    };
    __decorate([
        core_1.ContentChildren(DropdownItem), 
        __metadata('design:type', core_1.QueryList)
    ], Dropdown.prototype, "children", void 0);
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
                '[class.open]': 'isOpen',
                '(keydown.escape)': 'handleEscape($event)',
                '(keydown.ArrowDown)': 'handleArrow($event, 1)',
                '(keydown.ArrowUp)': 'handleArrow($event, -1)',
                '(click)': 'handleClick($event)',
            },
            template: "\n    <div *ngIf=\"isOpen\"\n         (click)=\"backdropClick($event)\"\n         class=\"dropdown-backdrop\">\n    </div>\n    <ng-content></ng-content>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;
var DropdownToggle = (function () {
    function DropdownToggle(dropdown) {
        this.dropdown = dropdown;
    }
    DropdownToggle.prototype.setMousedown = function (e) {
        // ignore disabled clicks
        if (e.target.classList.contains('disabled'))
            return;
        if (this.dropdown.isOpen) {
            this.dropdown.close.emit(undefined);
        }
        else {
            this.dropdown.open.emit(undefined);
        }
        e.stopPropagation();
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
                '[attr.aria-haspopup]': 'true',
            },
        }),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [Dropdown])
    ], DropdownToggle);
    return DropdownToggle;
}());
exports.DropdownToggle = DropdownToggle;
exports.DROPDOWN_DIRECTIVES = [
    Dropdown,
    DropdownToggle,
    DropdownItem,
];
var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: exports.DROPDOWN_DIRECTIVES,
            exports: exports.DROPDOWN_DIRECTIVES,
        }), 
        __metadata('design:paramtypes', [])
    ], BsDropdownModule);
    return BsDropdownModule;
}());
exports.BsDropdownModule = BsDropdownModule;
//# sourceMappingURL=dropdown.js.map