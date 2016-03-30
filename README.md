# Angular 2 Bootstrap Dropdown 

__Install:__  
```npm install ng2-bs-dropdown --save```  
__Use:__  
component.js
```typescript 
import {DROPDOWN_DIRECTIVES} from 'ng2-bs-dropdown';
@Component({
  selector: 'example',
  directives: [DROPDOWN_DIRECTIVES],
  templateUrl: 'has-dropdown.html'
})
export class DropdownDemo { }
```  
has-dropdown.html
```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
```

Each dropdown must have a parent element with class `dropdown` and children elements `dropdown-toggle` and `dropdown-menu`.