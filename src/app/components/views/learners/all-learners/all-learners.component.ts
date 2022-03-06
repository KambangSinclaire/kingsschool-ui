import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-learners',
  templateUrl: './all-learners.component.html',
  styleUrls: ['./all-learners.component.scss']
})
export class AllLearnersComponent implements OnInit {

  isList!: number;
  table_interact1: boolean = false;
  table_interact2: boolean = false;
  table_interact3: boolean = false;
  table_interact4: boolean = false;
  table_interact5: boolean = false;
  table_interact6: boolean = false;
  table_interact7: boolean = false;

  checkAll(value: any) {
    value = value.target.checked;
    this.table_interact1 = value;
    this.table_interact2 = value;
    this.table_interact3 = value;
    this.table_interact4 = value;
    this.table_interact5 = value;
    this.table_interact6 = value;
    this.table_interact7 = value;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
