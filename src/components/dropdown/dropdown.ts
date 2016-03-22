import {
    Directive,
    OnInit, OnDestroy, Input, Output, HostBinding,
    EventEmitter, ElementRef, ContentChildren,
    Query, QueryList
} from 'angular2/core';

@Directive({
    selector: '[.dropdown]',
    host: {
    }
})
export class Dropdown implements OnInit, OnDestroy {
    isOpen: Boolean = false
    constructor() {
        console.log('Dropdown');
        console.log(this.isOpen)
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
}

@Directive({
    selector: '[.dropdown-toggle]',
    host: {
        '(mousedown)': 'setMousedown()',
    }
})
export class DropdownToggle implements OnInit, OnDestroy {
    @Output() toggle: EventEmitter<any> = new EventEmitter();
    constructor() {
        console.log('DropdownToggle');
    }
    setMousedown() {
        console.log('clickDropdownToggle')
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
}

@Directive({
    selector: '[.dropdown-menu]'
})
export class DropdownMenu implements OnInit, OnDestroy {
    constructor() {
        console.log('DropdownMenu');
    }
    ngOnInit() {

    }
    ngOnDestroy() {

    }
}


export const DROPDOWN_DIRECTIVES: Array<any> = [Dropdown, DropdownToggle, DropdownMenu];