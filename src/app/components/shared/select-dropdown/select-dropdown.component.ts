import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {

  @Input("selectConfig") selectConfig: SelectConfig = { name: '', hasSubMenu: false };
  @Input("selectData") selectData: any[] = [];
  @Output('change') selectedValues: EventEmitter<any> = new EventEmitter();

  isList: any;
  subList = 0;
  constructor() { }

  ngOnInit(): void { }

  sendSelectedValues() {
    this.selectedValues.emit("selected Inputs");
    this.isList= false;
  }

}


export type SelectConfig = {
  name: string,
  hasSubMenu?: boolean
}