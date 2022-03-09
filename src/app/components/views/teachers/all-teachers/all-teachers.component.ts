import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/interfaces/teacher.interface';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.scss']
})
export class AllTeachersComponent implements OnInit {

  constructor(private teacherService: TeachersService) { }

  teachers: ITeacher[] = [];
  // class properties
  routes = {
    details: '/' + ApiRoutes.dashboard.home + '/' + ApiRoutes.dashboard.teacher.all + '/' + ApiRoutes.dashboard.teacher.crud.details,
    add: ApiRoutes.dashboard.teacher.crud.add
  };
  ngOnInit(): void {
    this.allTeachers()
  }


  allTeachers() {
    this.teacherService.allTeachers("").subscribe(response => {
      this.teachers = response.data;
    });
  }

}
