import {
  Component,
  ViewChild,
  Input,
  Renderer,
  ElementRef,
} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES, Dropdown} from '../../components/dropdown/dropdown';


@Component({
  selector: 'dropdown-input',
  directives: [
    DROPDOWN_DIRECTIVES,
    FORM_DIRECTIVES,
  ],
  template: `
  <div #dropdown (open)="openDropdown()" class="dropdown">
    <button class="btn btn-default dropdown-toggle" type="button">
      {{ state.name || 'Content' }}
    </button>
    <div class="dropdown-menu">
      <div class="bs-searchbox">
        <input #searchInput [(ngModel)]="searchQuery"
                            (ngModelChange)="search()"
                            (click)="$event.stopPropagation()"
                            (keyup.enter)="useSearch()"
                            type="text" class="form-control" autocomplete="off">
      </div>
      <div class="dropdown-menu-items">
        <a *ngFor="let ctx of filteredAvailable"
           (click)="pick(ctx)"
           class="dropdown-item">
           {{ctx.name}}
        </a>
      </div>
    </div>
  </div>
  `,
  styles: [`
    .dropdown-menu-items {
      height: 400px;
      overflow-y: scroll;
    }
    .bs-searchbox {
      padding: 4px 8px;
    }
  `]
})
export class DropdownInput {
  @ViewChild('searchInput') input: ElementRef;
  @ViewChild(Dropdown) dropdown: Dropdown;

  private state: Object = {};
  private searchQuery: string = '';
  private filteredAvailable = availableStates;

  constructor(
    private renderer: Renderer
  ) { }
  openDropdown() {
    this.renderer.invokeElementMethod(this.input.nativeElement, 'focus', []);
  }
  useSearch() {
    if (this.filteredAvailable[0]) {
      this.pick(this.filteredAvailable[0]);
      this.dropdown.close.emit(null);
      this.searchQuery = '';
      this.filteredAvailable = availableStates;
    }
  }
  pick(subject: any) {
    this.state = subject;
  }
  search() {
    if (this.searchQuery) {
      let query = this.searchQuery.toLowerCase();
      this.filteredAvailable = availableStates.filter((s) => {
        return s.name.toLowerCase().indexOf(query) !== -1;
      });
    } else {
      this.filteredAvailable = availableStates;
    }
  }
}

const availableStates = [
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
