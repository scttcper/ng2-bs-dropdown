import {
  Directive,
  Component,
  HostBinding,
  EventEmitter,
  Host,
  Attribute,
  Output,
  ContentChildren,
  QueryList,
  ElementRef,
  Renderer,
} from '@angular/core';

@Directive({
  selector: '.dropdown-item:not(.disabled)',
})
export class DropdownItem {

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {}
  focus() {
    this.renderer.invokeElementMethod(this.el.nativeElement, 'focus');
  }
}

@Component({
  selector: '.dropdown',
  host: {
    '(touchend)': 'ontouchend($event)',
    '[class.open]': 'isOpen',
    '(keydown.escape)': 'handleEscape($event)',
    '(keydown.ArrowDown)': 'handleArrow($event, 1)',
    '(keydown.ArrowUp)': 'handleArrow($event, -1)',
    '(click)': 'handleClick($event)',
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
  @ContentChildren(DropdownItem) children: QueryList<DropdownItem>;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  public isOpen: boolean = false;
  private focusIndex: number = -1;

  constructor() {
    this.open.subscribe(() => {
      this.isOpen = true;
    });
    this.close.subscribe(() => {
      this.isOpen = false;
    });
  }
  backdropClick(event: any) {
    if (this.isOpen) {
      this.close.emit(undefined);
      event.stopPropagation();
    }
  }
  handleClick(event: any) {
    // not disabled link
    if (event.target.classList.contains('disabled')) return;
    // not text area
    if (/input|textarea/i.test(event.target.tagName)) return;
    this.close.emit(undefined);
  }
  handleEscape(event: any) {
    if (/input|textarea/i.test(event.target.tagName)) return;
    if (this.isOpen) {
      this.close.emit(undefined);
    }
    event.preventDefault();
    event.stopPropagation();
  }
  handleArrow(event: any, move: number) {
    if (/input|textarea/i.test(event.target.tagName)) return;
    this.focusIndex += move;
    let items = this.children.toArray();
    if (!items.length) {
      return;
    }
    // restrain to available elements
    if (this.focusIndex > items.length - 1) this.focusIndex = items.length - 1;
    if (this.focusIndex < 0) this.focusIndex = 0;
    items[this.focusIndex].focus();
    event.stopPropagation();
    event.preventDefault();
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
  constructor(@Host() private dropdown: Dropdown) {}
  setMousedown(e: any) {
    // ignore disabled clicks
    if (e.target.classList.contains('disabled')) return;
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

export const DROPDOWN_DIRECTIVES: Array<any> = [
  Dropdown,
  DropdownToggle,
  DropdownItem,
];
