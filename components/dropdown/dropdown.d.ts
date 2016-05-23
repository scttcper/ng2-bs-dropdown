import { EventEmitter, OnDestroy } from '@angular/core';
export declare var currentlyOpen: Dropdown;
export declare class Dropdown implements OnDestroy {
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    isOpen: boolean;
    constructor(cl: string);
    ngOnDestroy(): void;
    haltDisabledEvents(event: Event): void;
}
export declare class DropdownToggle {
    private dropdown;
    disabled: boolean;
    classes: string;
    constructor(dropdown: Dropdown, cl: string);
    setMousedown(e: Event): void;
    isAriaExpanded: string;
}
export declare const DROPDOWN_DIRECTIVES: Array<any>;
