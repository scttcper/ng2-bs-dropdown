import { EventEmitter, OnDestroy } from '@angular/core';
export declare var openDropdowns: Array<EventEmitter<any>>;
export declare class Dropdown implements OnDestroy {
    toggle: EventEmitter<any>;
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
