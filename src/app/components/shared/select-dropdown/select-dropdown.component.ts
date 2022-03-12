import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {

  @Input("selectName") selectName: string = "";
  @Output('change') selectedValues: EventEmitter<any> = new EventEmitter();

  isList: any;
  subList = 0;
  constructor() { }

  ngOnInit(): void { }

  sendSelectedValues() {
    this.selectedValues.emit("selected Inputs");
  }

}
