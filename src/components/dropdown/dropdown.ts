import {
  Directive,
  Component,
  HostBinding,
  EventEmitter,
  Host,
  Attribute,
  Output,
} from '@angular/core';

@Component({
  selector: '.dropdown',
  host: {
    '(touchend)': 'ontouchend($event)',
    '[class.open]': 'isOpen',
  },
  template: `
    <div *ngIf="isOpen"
         (click)="backdropClick($event)"
         class="dropdown-backdrop">
    </div>
    <ng-content></ng-content>
  `,
})
export class Dropdown {
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  public isOpen: boolean = false;
  public isMobileOpen: boolean = false;

  constructor( @Attribute('class') cl: string) {
    this.open.subscribe(() => {
      this.isOpen = true;
    });
    this.close.subscribe(() => {
      this.isOpen = false;
    });

    let open = cl.includes('open');
    if (open) {
      this.open.emit(undefined);
    }
  }
  backdropClick(event: Event) {
    if (this.isOpen) {
      this.close.emit(undefined);
      event.stopPropagation();
    }
  }
  ontouchend() {
    this.isMobileOpen = true;
  }
}


@Directive({
  selector: '.dropdown-toggle',
  host: {
    '(click)': 'setMousedown($event)',
    '[class.active]': 'dropdown.isOpen',
    '[attr.aria-haspopup]': 'true',
  },
})
export class DropdownToggle {
  disabled: boolean;
  classes: string;

  constructor(
    @Host() private dropdown: Dropdown,
    @Attribute('class') cl: string
  ) {
    this.disabled = cl.includes('disabled');
  }

  setMousedown(e: Event) {
    // e.stopPropagation();
    // ignore disabled clicks
    if (this.disabled) { return; };
    if (this.dropdown.isOpen) {
      this.dropdown.close.emit(undefined);
    } else {
      this.dropdown.open.emit(undefined);
    }
    event.stopPropagation();
  }

  @HostBinding('attr.aria-expanded')
  get isAriaExpanded(): string {
    return this.dropdown.isOpen ? 'true' : 'false';
  }
}

@Directive({
  selector: '.dropdown-menu',
  host: {
    '(click)': 'setMousedown($event)',
  },
})
export class DropdownMenu {
  disabled: boolean;
  classes: string;

  constructor(@Host() private dropdown: Dropdown) {}

  setMousedown(e: Event) {
    if (this.dropdown.isOpen) {
      this.dropdown.close.emit(undefined);
    } else {
      this.dropdown.open.emit(undefined);
    }
  }
}

export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle, DropdownMenu];
