import {
  Directive,
  HostBinding,
  EventEmitter,
  Host,
  Attribute
} from 'angular2/core';


export var openDropdowns: Array<EventEmitter<any>> = [];

function closeOpen() {
  let l = openDropdowns.length;
  while (l--) {
    let n = openDropdowns.pop();
    n.emit(null);
  }
}

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

  constructor( @Attribute('class') cl: string ) {

    this.toggle.subscribe(() => {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        closeOpen();
        openDropdowns.push(this.toggle);
      }
    });

    let open = cl.includes('open');
    if (open) { 
      this.toggle.emit(null)
    };
  }

  haltDisabledEvents(event: Event) {
    closeOpen();
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

  constructor( @Host() private dropdown: Dropdown,
    @Attribute('class') cl: string ) {
    this.disabled = cl.includes('disabled');
  }

  setMousedown(e: Event) {
    e.stopPropagation();
    // ignore disabled clicks
    if (this.disabled) { return; };
    if (this.dropdown.isOpen) {
      closeOpen();
    } else {
      this.dropdown.toggle.emit(null);
    }
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
