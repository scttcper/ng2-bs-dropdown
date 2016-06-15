import { EventEmitter } from '@angular/core';
export declare class Dropdown {
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    isOpen: boolean;
    isMobileOpen: boolean;
    constructor(cl: string);
    backdropClick(event: Event): void;
    ontouchend(): void;
}
export declare class DropdownToggle {
    private dropdown;
    disabled: boolean;
    classes: string;
    constructor(dropdown: Dropdown, cl: string);
    setMousedown(e: Event): void;
    isAriaExpanded: string;
}
export declare class DropdownMenu {
    private dropdown;
    disabled: boolean;
    classes: string;
    constructor(dropdown: Dropdown);
    setMousedown(e: Event): void;
}
export declare const DROPDOWN_DIRECTIVES: Array<any>;
