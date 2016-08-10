import { EventEmitter, QueryList, ElementRef, Renderer } from '@angular/core';
export declare class DropdownItem {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer);
    focus(): void;
}
export declare class Dropdown {
    children: QueryList<DropdownItem>;
    open: EventEmitter<any>;
    close: EventEmitter<any>;
    isOpen: boolean;
    private focusIndex;
    constructor();
    backdropClick(event: any): void;
    handleClick(event: any): void;
    handleEscape(event: any): void;
    handleArrow(event: any, move: number): void;
}
export declare class DropdownToggle {
    private dropdown;
    constructor(dropdown: Dropdown);
    setMousedown(e: any): void;
    isAriaExpanded: string;
}
export declare const DROPDOWN_DIRECTIVES: Array<any>;
export declare class BsDropdownModule {
}
