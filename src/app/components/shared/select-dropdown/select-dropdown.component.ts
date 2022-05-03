import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {

  @Input("selectConfig") selectConfig: SelectConfig = { name: '', hasSubMenu: false };
  @Input("selectData") selectData: any[] = [];
  @Input("selectOnce") selectOnce: boolean = false;
  @Output('change') selectedValues: EventEmitter<any> = new EventEmitter();

  isList: any;
  subList = 0;
  constructor() { }

  ngOnInit(): void { }

  sendSelectedValues() {
    this.selectedValues.emit("selected Inputs");
    this.isList = false;
  }
  toggleDropdown(){
  this.isList = !this.isList
 this.selectOnce
  this.ngOnInit();
}
}


export type SelectConfig = {
  name: string,
  hasSubMenu?: boolean,
  selectOnce?: boolean
}