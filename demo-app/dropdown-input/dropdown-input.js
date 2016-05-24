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
var common_1 = require('@angular/common');
var dropdown_1 = require('../../components/dropdown/dropdown');
var DropdownInput = (function () {
    function DropdownInput(renderer) {
        this.renderer = renderer;
        this.state = {};
        this.searchQuery = '';
        this.filteredAvailable = availableStates;
    }
    DropdownInput.prototype.openDropdown = function () {
        this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
    };
    DropdownInput.prototype.useSearch = function () {
        if (this.filteredAvailable[0]) {
            this.pick(this.filteredAvailable[0]);
            this.dropdown.close.emit(null);
            this.searchQuery = '';
            this.filteredAvailable = availableStates;
        }
    };
    DropdownInput.prototype.pick = function (subject) {
        this.state = subject;
    };
    DropdownInput.prototype.search = function () {
        if (this.searchQuery) {
            var query_1 = this.searchQuery.toLowerCase();
            this.filteredAvailable = availableStates.filter(function (s) {
                return s.name.toLowerCase().indexOf(query_1) !== -1;
            });
        }
        else {
            this.filteredAvailable = availableStates;
        }
    };
    __decorate([
        core_1.ViewChild('searchInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], DropdownInput.prototype, "input", void 0);
    __decorate([
        core_1.ViewChild(dropdown_1.Dropdown), 
        __metadata('design:type', dropdown_1.Dropdown)
    ], DropdownInput.prototype, "dropdown", void 0);
    DropdownInput = __decorate([
        core_1.Component({
            selector: 'dropdown-input',
            directives: [
                dropdown_1.DROPDOWN_DIRECTIVES,
                common_1.FORM_DIRECTIVES,
            ],
            template: "\n  <div #dropdown (open)=\"openDropdown()\" class=\"dropdown\">\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\">\n      {{ state.name || 'Select a State' }}\n    </button>\n    <div class=\"dropdown-menu\">\n      <div class=\"bs-searchbox\">\n        <input #searchInput [(ngModel)]=\"searchQuery\"\n                            (ngModelChange)=\"search()\"\n                            (click)=\"$event.stopPropagation()\"\n                            (keyup.enter)=\"useSearch()\"\n                            type=\"text\" class=\"form-control\" autocomplete=\"off\">\n      </div>\n      <div class=\"dropdown-menu-items\">\n        <a *ngFor=\"let ctx of filteredAvailable\"\n           (click)=\"pick(ctx)\"\n           class=\"dropdown-item\">\n           {{ctx.name}}\n        </a>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .dropdown-menu-items {\n      height: 400px;\n      overflow-y: scroll;\n    }\n    .bs-searchbox {\n      padding: 4px 8px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], DropdownInput);
    return DropdownInput;
}());
exports.DropdownInput = DropdownInput;
var availableStates = [
    { "name": "Alabama", "alpha-2": "AL" },
    { "name": "Alaska", "alpha-2": "AK" },
    { "name": "Arizona", "alpha-2": "AZ" },
    { "name": "Arkansas", "alpha-2": "AR" },
    { "name": "California", "alpha-2": "CA" },
    { "name": "Colorado", "alpha-2": "CO" },
    { "name": "Connecticut", "alpha-2": "CT" },
    { "name": "Delaware", "alpha-2": "DE" },
    { "name": "District of Columbia", "alpha-2": "DC" },
    { "name": "Florida", "alpha-2": "FL" },
    { "name": "Georgia", "alpha-2": "GA" },
    { "name": "Hawaii", "alpha-2": "HI" },
    { "name": "Idaho", "alpha-2": "ID" },
    { "name": "Illinois", "alpha-2": "IL" },
    { "name": "Indiana", "alpha-2": "IN" },
    { "name": "Iowa", "alpha-2": "IA" },
    { "name": "Kansas", "alpha-2": "KS" },
    { "name": "Kentucky", "alpha-2": "KY" },
    { "name": "Louisiana", "alpha-2": "LA" },
    { "name": "Maine", "alpha-2": "ME" },
    { "name": "Maryland", "alpha-2": "MD" },
    { "name": "Massachusetts", "alpha-2": "MA" },
    { "name": "Michigan", "alpha-2": "MI" },
    { "name": "Minnesota", "alpha-2": "MN" },
    { "name": "Mississippi", "alpha-2": "MS" },
    { "name": "Missouri", "alpha-2": "MO" },
    { "name": "Montana", "alpha-2": "MT" },
    { "name": "Nebraska", "alpha-2": "NE" },
    { "name": "Nevada", "alpha-2": "NV" },
    { "name": "New Hampshire", "alpha-2": "NH" },
    { "name": "New Jersey", "alpha-2": "NJ" },
    { "name": "New Mexico", "alpha-2": "NM" },
    { "name": "New York", "alpha-2": "NY" },
    { "name": "North Carolina", "alpha-2": "NC" },
    { "name": "North Dakota", "alpha-2": "ND" },
    { "name": "Ohio", "alpha-2": "OH" },
    { "name": "Oklahoma", "alpha-2": "OK" },
    { "name": "Oregon", "alpha-2": "OR" },
    { "name": "Pennsylvania", "alpha-2": "PA" },
    { "name": "Rhode Island", "alpha-2": "RI" },
    { "name": "South Carolina", "alpha-2": "SC" },
    { "name": "South Dakota", "alpha-2": "SD" },
    { "name": "Tennessee", "alpha-2": "TN" },
    { "name": "Texas", "alpha-2": "TX" },
    { "name": "Utah", "alpha-2": "UT" },
    { "name": "Vermont", "alpha-2": "VT" },
    { "name": "Virginia", "alpha-2": "VA" },
    { "name": "Washington", "alpha-2": "WA" },
    { "name": "West Virginia", "alpha-2": "WV" },
    { "name": "Wisconsin", "alpha-2": "WI" },
    { "name": "Wyoming", "alpha-2": "WY" },
];
//# sourceMappingURL=/Users/scoope7/ng2-bs-dropdown/tmp/broccoli_type_script_compiler-input_base_path-DZqbAegb.tmp/0/demo-app/dropdown-input/dropdown-input.js.map