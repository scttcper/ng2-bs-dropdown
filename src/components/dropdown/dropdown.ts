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
    '(document:click)': 'documentClick($event)',
    '[class.open]': 'isOpen',
  },
  template: `
    <div *ngIf="isMobileOpen && isOpen"
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
      this.open.emit(null);
    }
  }

  backdropClick(event: Event) {
    if (this.isOpen) {
      this.close.emit(null);
      event.stopPropagation();
    }
  }
  documentClick(event: Event) {
    if (this.isOpen) {
      this.close.emit(null);
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
  disabled: boolean = null;
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
      this.dropdown.close.emit(null);
    } else {
      this.dropdown.open.emit(null);
    }
  }

  @HostBinding('attr.aria-expanded')
  get isAriaExpanded(): string {
    return this.dropdown.isOpen ? 'true' : 'false';
  }
}

export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle];
