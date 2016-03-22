import {
    Directive,
    OnInit, OnDestroy, Input, Output, HostBinding,
    EventEmitter, ElementRef, ContentChildren,
    Query, QueryList, Host
} from 'angular2/core';

@Directive({
    selector: '[.dropdown]',
    host: {
        '[class.open]': 'isOpen'
    }
})
export class Dropdown implements OnInit, OnDestroy {
    isOpen: Boolean;
    toggle: EventEmitter<any> = new EventEmitter();
    constructor() {
        console.log(this.isOpen)
        this.toggle.subscribe(() => {
            this.isOpen = !this.isOpen;
        });
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
}

@Directive({
    selector: '[.dropdown-toggle]',
    host: {
        '(mousedown)': 'setMousedown()'
    }
})
export class DropdownToggle implements OnInit, OnDestroy {
    constructor(@Host() private dropdown: Dropdown) {}
    setMousedown() {
        this.dropdown.toggle.emit(null);
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
}

// @Directive({
//     selector: '[.dropdown-menu]',
//     host: {
//         '[class.open]': 'isOpen'
//     }
// })
// export class DropdownMenu implements OnInit, OnDestroy {
//     isOpen: Boolean;
//     constructor(@Host() private dropdown: Dropdown) {
//         console.log('DropdownMenu');
//         this.dropdown.toggle.subscribe(() => { this.isOpen = !this.isOpen; });
//     }
//     ngOnInit() {

//     }
//     ngOnDestroy() {

//     }
// }


export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle];