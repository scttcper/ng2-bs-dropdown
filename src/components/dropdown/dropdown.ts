import {
  Directive,
  HostBinding,
  EventEmitter,
  Host,
  Attribute,
  OnDestroy,
  Output,
} from '@angular/core';


export var currentlyOpen: EventEmitter<any>;

@Directive({
  selector: '.dropdown',
  host: {
    '(document:click)': 'haltDisabledEvents()',
    '[class.open]': 'isOpen'
  }
})
export class Dropdown implements OnDestroy {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  public isOpen: boolean = false;

  constructor( @Attribute('class') cl: string) {
    this.toggle.subscribe(() => {
      this.isOpen = !this.isOpen;
      // if another dropdown is open
      // debugger;
      if (currentlyOpen && currentlyOpen !== this.toggle && this.isOpen) {
        currentlyOpen.emit(null);
      }
      // if current open is this dropdown
      if (currentlyOpen === this.toggle && !this.isOpen) {
        currentlyOpen = undefined;
      }
      if (this.isOpen) {
        currentlyOpen = this.toggle;
      }
    });

    let open = cl.includes('open');
    if (open) {
      this.toggle.emit(null);
    };
  }

  ngOnDestroy() {
    if (currentlyOpen === this.toggle) {
      currentlyOpen = undefined;
    }
  }

  haltDisabledEvents(event: Event) {
    if (currentlyOpen === this.toggle) {
      this.isOpen = false;
    }
  }
}

@Directive({
  selector: '.dropdown-toggle',
  host: {
    '(click)': 'setMousedown($event)',
    '[class.active]': 'dropdown.isOpen',
    '[attr.aria-haspopup]': 'true'
  }
})
export class DropdownToggle {
  disabled: boolean = null;
  classes: string;

  constructor(
    @Host() private dropdown: Dropdown,
    @Attribute('class') cl: string
  ) {
    this.disabled = cl.includes('disabled');
  }

  setMousedown(e: Event) {
    e.stopPropagation();
    // ignore disabled clicks
    if (this.disabled) { return; };
    this.dropdown.toggle.emit(null);
  }

  @HostBinding('attr.aria-expanded')
  /** Gets the aria-expanded value for the component, which must be a string for Dart. */
  get isAriaExpanded(): string {
    return this.dropdown.isOpen ? 'true' : 'false';
  }
}

export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle];
