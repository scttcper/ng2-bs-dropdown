import { Renderer, ElementRef } from '@angular/core';
import { Dropdown } from '../../components/dropdown/dropdown';
export declare class DropdownInput {
    private renderer;
    input: ElementRef;
    dropdown: Dropdown;
    private state;
    private searchQuery;
    private filteredAvailable;
    constructor(renderer: Renderer);
    openDropdown(): void;
    useSearch(): void;
    pick(subject: any): void;
    search(): void;
}
