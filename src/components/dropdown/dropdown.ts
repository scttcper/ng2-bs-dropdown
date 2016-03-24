import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  Output,
  HostBinding,
  EventEmitter,
  ElementRef,
  ContentChildren,
  Query,
  QueryList,
  Host,
  Attribute,
  HostListener
} from 'angular2/core';


@Directive({
  selector: '.dropdown',
  host: {
    '(document:click)': 'haltDisabledEvents()',
    '[class.open]': 'isOpen'
  }
})
export class Dropdown {
  toggle: EventEmitter<any> = new EventEmitter();
  public isOpen: boolean = false;

  constructor( @Attribute('class') public cl: string ) {
    this.isOpen = cl.includes('open');
    this.toggle.subscribe(() => {
      this.isOpen = !this.isOpen;
    });
  }

  // dosomething($event:any){console.log($event.target)}
  haltDisabledEvents(event: Event) {
    if (this.isOpen) {
      this.toggle.emit(null);
    }
  }
}

@Directive({
  selector: '.dropdown-toggle',
  host: {
    '(click)': 'setMousedown($event)'
  }
})
export class DropdownToggle {
  disabled: boolean = null;
  classes: string;

  constructor( @Host() private dropdown: Dropdown) { }

  setMousedown(e: Event) {
    e.stopPropagation();
    console.log('DropdownToggleclick')
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
    console.log('DropdownMenuclick')
  }
}


export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle, DropdownMenu];