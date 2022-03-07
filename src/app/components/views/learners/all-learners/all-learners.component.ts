import { Component, OnInit } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

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


  // class properties
  routes = {
    details: '/' + ApiRoutes.dashboard.home + '/' + ApiRoutes.dashboard.learner.all + '/' + ApiRoutes.dashboard.learner.crud.details,
    add: ApiRoutes.dashboard.learner.crud.add
  };

  constructor() { }

  ngOnInit(): void {
  }
}
