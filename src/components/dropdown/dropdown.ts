import {
  Directive,
  HostBinding,
  EventEmitter,
  Host,
  Attribute
} from 'angular2/core';


export var OpenDropdowns: Array<EventEmitter<any>> = [];

@Directive({
  selector: '.dropdown',
  host: {
    '(document:click)': 'haltDisabledEvents()',
    '[class.open]': 'isOpen'
  }
})
export class Dropdown {
  public toggle: EventEmitter<any> = new EventEmitter();
  public isOpen: boolean = false;

  constructor( @Attribute('class') cl: string) {
    this.isOpen = cl.includes('open');
    if (this.isOpen) {
      OpenDropdowns.push(this.toggle);
    }
    this.toggle.subscribe(() => {
      // if not open check for other open dropdowns and close them
      if (!this.isOpen) {
        OpenDropdowns.forEach((n) => {
          n.emit(null);
        });
        OpenDropdowns.splice(0, OpenDropdowns.length);
        OpenDropdowns.push(this.toggle);
      }
      this.isOpen = !this.isOpen;
    });
  }

  haltDisabledEvents(event: Event) {
    if (this.isOpen) {
      this.toggle.emit(null);
      OpenDropdowns.splice(0, OpenDropdowns.length);
    }
  }
}

@Directive({
  selector: '.dropdown-toggle',
  host: {
    '(click)': 'setMousedown($event)',
    '[class.active]': 'dropdown.isOpen'
  }
})
export class DropdownToggle {
  disabled: boolean = null;
  classes: string;

  constructor( @Host() private dropdown: Dropdown ) { }

  setMousedown(e: Event) {
    e.stopPropagation();
    if (this.disabled) return;
    this.dropdown.toggle.emit(null);
  }

  @HostBinding('attr.aria-expanded')
  /** Gets the aria-expanded value for the component, which must be a string for Dart. */
  get isAriaExpanded(): string {
    return this.dropdown.isOpen ? 'true' : 'false';
  }
}

@Directive({
  selector: '.dropdown-menu',
  host: {
    '(click)': 'setMousedown($event)'
  }
})
export class DropdownMenu {
  setMousedown(e: Event) {
    e.stopPropagation();
  }
}


export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle, DropdownMenu];