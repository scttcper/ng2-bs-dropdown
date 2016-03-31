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
var core_1 = require('angular2/core');
exports.openDropdowns = [];
function closeOpen() {
    var l = exports.openDropdowns.length;
    while (l--) {
        var n = exports.openDropdowns.pop();
        n.emit(null);
    }
}
var Dropdown = (function () {
    function Dropdown(cl) {
        var _this = this;
        this.toggle = new core_1.EventEmitter();
        this.isOpen = false;
        this.toggle.subscribe(function () {
            _this.isOpen = !_this.isOpen;
            if (_this.isOpen) {
                closeOpen();
                exports.openDropdowns.push(_this.toggle);
            }
        });
        var open = cl.includes('open');
        if (open) {
            this.toggle.emit(null);
        }
        ;
    }
    Dropdown.prototype.ngOnDestroy = function () {
        // remove self if in list of open dropdowns
        var l = exports.openDropdowns.length;
        while (l--) {
            if (exports.openDropdowns[l] === this.toggle) {
                exports.openDropdowns.splice(l, 1);
            }
        }
    };
    Dropdown.prototype.haltDisabledEvents = function (event) {
        closeOpen();
    };
    Dropdown = __decorate([
        core_1.Directive({
            selector: '.dropdown',
            host: {
                '(document:click)': 'haltDisabledEvents()',
                '[class.open]': 'isOpen'
            }
        }),
        __param(0, core_1.Attribute('class')), 
        __metadata('design:paramtypes', [String])
    ], Dropdown);
    return Dropdown;
})();
exports.Dropdown = Dropdown;
var DropdownToggle = (function () {
    function DropdownToggle(dropdown, cl) {
        this.dropdown = dropdown;
        this.disabled = null;
        this.disabled = cl.includes('disabled');
    }
    DropdownToggle.prototype.setMousedown = function (e) {
        e.stopPropagation();
        // ignore disabled clicks
        if (this.disabled) {
            return;
        }
        ;
        if (this.dropdown.isOpen) {
            closeOpen();
        }
        else {
            this.dropdown.toggle.emit(null);
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
})();
exports.DropdownToggle = DropdownToggle;
var DropdownMenu = (function () {
    function DropdownMenu() {
    }
    DropdownMenu.prototype.setMousedown = function (e) {
        e.stopPropagation();
    };
    DropdownMenu = __decorate([
        core_1.Directive({
            selector: '.dropdown-menu',
            host: {
                '(click)': 'setMousedown($event)'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], DropdownMenu);
    return DropdownMenu;
})();
exports.DropdownMenu = DropdownMenu;
exports.DROPDOWN_DIRECTIVES = [Dropdown, DropdownToggle, DropdownMenu];
//# sourceMappingURL=../../../../components/dropdown/dropdown.js.map