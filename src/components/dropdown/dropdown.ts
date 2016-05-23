import {
  Directive,
  HostBinding,
  EventEmitter,
  Host,
  Attribute,
  OnDestroy,
  Output,
} from '@angular/core';


export var currentlyOpen: Dropdown;

@Directive({
  selector: '.dropdown',
  host: {
    '(document:click)': 'haltDisabledEvents()',
    '[class.open]': 'isOpen'
  }
})
export class Dropdown implements OnDestroy {
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  public isOpen: boolean = false;

  constructor( @Attribute('class') cl: string) {
    this.open.subscribe(() => {
      console.log('open');
      this.isOpen = true;
      if (currentlyOpen && currentlyOpen !== this) {
        currentlyOpen.close.emit(null);
      }
      currentlyOpen = this;
    });
    this.close.subscribe(() => {
      console.log('close');
      this.isOpen = false;
      if (currentlyOpen === this) {
        currentlyOpen = undefined;
      }
    });

    let open = cl.includes('open');
    if (open) {
      this.open.emit(null)
    }
  }

  ngOnDestroy() {
    if (currentlyOpen === this) {
      currentlyOpen = undefined;
    }
  }

  haltDisabledEvents(event: Event) {
    if (currentlyOpen === this) {
      this.close.emit(null);
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
    if (this.dropdown.isOpen) {
      this.dropdown.close.emit(null);
    } else {
      this.dropdown.open.emit(null);
    }
  }

  @HostBinding('attr.aria-expanded')
  /** Gets the aria-expanded value for the component, which must be a string for Dart. */
  get isAriaExpanded(): string {
    return this.dropdown.isOpen ? 'true' : 'false';
  }
}

export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle];
