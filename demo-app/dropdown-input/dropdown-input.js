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
var availableStates = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];
var DropdownInput = (function () {
    function DropdownInput(renderer) {
        this.renderer = renderer;
        this.searchQuery = '';
        this.filteredAvailable = availableStates;
    }
    DropdownInput.prototype.openDropdown = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.input.nativeElement, 'focus'); });
    };
    DropdownInput.prototype.useSearch = function () {
        if (this.filteredAvailable[0]) {
            this.pick(this.filteredAvailable[0]);
            this.dropdown.close.emit(undefined);
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
                return s.toLowerCase().indexOf(query_1) !== -1;
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
            template: "\n  <div #dropdown (open)=\"openDropdown()\" class=\"dropdown\">\n    <button class=\"btn btn-primary dropdown-toggle\" type=\"button\">\n      {{ state || 'Select a State' }}\n    </button>\n    <div class=\"dropdown-menu\">\n      <div class=\"bs-searchbox\">\n        <input #searchInput\n               [(ngModel)]=\"searchQuery\"\n               (ngModelChange)=\"search()\"\n               (keyup.enter)=\"useSearch()\"\n               type=\"text\"\n               class=\"form-control\">\n      </div>\n      <div class=\"dropdown-menu-items\">\n        <a *ngFor=\"let s of filteredAvailable\"\n           (click)=\"pick(s)\"\n           class='dropdown-item'>\n           {{s}}\n        </a>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    .dropdown-menu-items {\n      height: 400px;\n      overflow-y: scroll;\n    }\n    .bs-searchbox {\n      padding: 4px 8px;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [core_1.Renderer])
    ], DropdownInput);
    return DropdownInput;
}());
exports.DropdownInput = DropdownInput;
//# sourceMappingURL=dropdown-input.js.map