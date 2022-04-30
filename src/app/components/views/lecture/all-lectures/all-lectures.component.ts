import { Component, OnInit } from '@angular/core';
import { ILecture } from 'src/app/interfaces/lecture.interface';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-lectures',
  templateUrl: './all-lectures.component.html',
  styleUrls: ['./all-lectures.component.scss']
})
export class AllLecturesComponent implements OnInit {

  constructor() { }

  lectures: ILecture[] = [];
  routes = ApiRoutes;
  routePath = {
    details: '/' + ApiRoutes.dashboard.home + '/' + ApiRoutes.dashboard.lecture.all + '/' + ApiRoutes.dashboard.lecture.crud.details,
    add: ApiRoutes.dashboard.lecture.crud.add
  };

  dropDownList: any;

  ngOnInit(): void {
  }

}
