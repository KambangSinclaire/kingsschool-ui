import { Component, OnInit } from '@angular/core';
import { IClassroom } from 'src/app/interfaces/classroom.interface';
import { ClassroomService } from 'src/app/services/classroom/classroom.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.scss']
})
export class AllRoomsComponent implements OnInit {

  constructor(private classService: ClassroomService) { }

  classrooms: IClassroom[] = [];
  routes = ApiRoutes;
  routePath = {
    details: '/' + ApiRoutes.dashboard.home + '/' + ApiRoutes.dashboard.classroom.all + '/' + ApiRoutes.dashboard.classroom.crud.details,
    add: ApiRoutes.dashboard.classroom.crud.add
  };

  dropDownList: any;

  ngOnInit(): void {
    this.allClassrooms()
  }

  allClassrooms() {
    this.classService.allClassrooms().subscribe(response => {
      console.log('response data', response.data);
      this.classrooms = response.data;
    })
  }
}
