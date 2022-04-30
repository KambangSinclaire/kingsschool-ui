import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITeacher } from 'src/app/interfaces/teacher.interface';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.scss']
})
export class AllTeachersComponent implements OnInit, OnChanges {

  constructor(private teacherService: TeachersService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.allTeachers();
  }

  teachers: ITeacher[] = [];
  headings: string[] = [];

 
  // courses: [[], Validators.required],
  // academic_level: [[], Validators.required],

  formFields: any[] = [
    { field: 'first_name', type: 'text' },
    { field: 'username', type: 'text' },
    { field: 'last_name', type: 'text' },
    { field: 'email', type: 'text' },
    { field: 'address', type: 'text' },
    { field: 'state', type: 'text' },
    { field: 'gender', type: 'text' },
    { field: 'zipcode', type: 'number' },
    { field: 'city', type: 'text' },
    { field: 'country', type: 'text' },
    { field: 'profile_photo', type: 'file' }
  ];

  selectOptions: any[] = [{ label: 'INSTOCK', value: 'instock' }]
  options: any = {
     name: "teacher",
      plural: 'teachers',
      permissions: {
        add: ApiRoutes.api.teacher.add,
        edit: ApiRoutes.api.teacher.edit,
        delete: ApiRoutes.api.teacher.delete,
        view: ApiRoutes.api.teacher.retrieveSingle,
        viewAll: ApiRoutes.api.teacher.retrieveSingle
      }
     }

  ngOnInit(): void {
    this.allTeachers()
  }

  allTeachers() {
    this.teacherService.allTeachers("").subscribe(response => {
      this.teachers = response.data;
      this.headings = response.headings;
    });
  }

  createOrEdit(event: any) {
    console.log(event);
    if(event.edit){
      delete event.edit;
      this.teacherService.editTeacher(event.id,event).subscribe(response => {
        this.allTeachers();
      });
    }else{
      this.teacherService.addTeacher(event).subscribe(response => {
        this.allTeachers();
      });
    }
  }

  delete(event: any) {
    this.teacherService.deleteTeacher(event?.id).subscribe(response => {
      this.allTeachers();
    });
  }
}
