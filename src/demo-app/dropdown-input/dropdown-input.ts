import {
  Component,
  ViewChild,
  Renderer,
  ElementRef,
} from '@angular/core';
import { Dropdown } from '../../components/dropdown/dropdown';

const availableStates = [
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

@Component({
  selector: 'dropdown-input',
  template: `
  <div #dropdown (open)="openDropdown()" class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button">
      {{ state || 'Select a State' }}
    </button>
    <div class="dropdown-menu">
      <div class="bs-searchbox">
        <input #searchInput
               [(ngModel)]="searchQuery"
               (ngModelChange)="search()"
               (keyup.enter)="useSearch()"
               type="text"
               class="form-control">
      </div>
      <div class="dropdown-menu-items">
        <a *ngFor="let s of filteredAvailable"
           (click)="pick(s)"
           class='dropdown-item'>
           {{s}}
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
  `],
})
export class DropdownInput {
  @ViewChild('searchInput') input: ElementRef;
  @ViewChild(Dropdown) dropdown: Dropdown;

  searchQuery: string = '';
  filteredAvailable = availableStates;
  state: string;

  constructor(
    private renderer: Renderer
  ) { }
  openDropdown() {
    setTimeout(() => this.renderer.invokeElementMethod(this.input.nativeElement, 'focus'));
  }
  useSearch() {
    if (this.filteredAvailable[0]) {
      this.pick(this.filteredAvailable[0]);
      this.dropdown.close.emit(undefined);
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
        return s.toLowerCase().indexOf(query) !== -1;
      });
    } else {
      this.filteredAvailable = availableStates;
    }
  }
}
