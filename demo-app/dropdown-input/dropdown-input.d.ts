import { Renderer, ElementRef } from '@angular/core';
import { Dropdown } from '../../components/dropdown/dropdown';
export declare class DropdownInput {
    private renderer;
    input: ElementRef;
    dropdown: Dropdown;
    searchQuery: string;
    filteredAvailable: string[];
    state: string;
    constructor(renderer: Renderer);
    openDropdown(): void;
    useSearch(): void;
    pick(subject: any): void;
    search(): void;
}
