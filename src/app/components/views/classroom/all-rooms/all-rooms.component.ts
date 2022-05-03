import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  ngOnChanges(changes: SimpleChanges): void {
    this.allClassrooms();
  }

  headings: string[] = [];

  formFields: any[] = [
    { field: 'name', type: 'text' },
    { field: 'description', type: 'textarea' },
    { field: 'capacity', type: 'number' },
    { field: 'color', type: 'color' },
  ];

  selectOptions: any[] = [{ label: 'INSTOCK', value: 'instock' }]

  options: any = { 
    name: "class",
     plural: 'classes',
     permissions: {
      add: ApiRoutes.api.classroom.add,
      edit: ApiRoutes.api.classroom.edit,
      delete: ApiRoutes.api.classroom.delete,
      view: ApiRoutes.api.classroom.retrieveSingle,
      viewAll: ApiRoutes.api.classroom.retrieveSingle
    }
     }

  ngOnInit(): void {
    this.allClassrooms();
  }

  createOrEdit(event: any) {
    if(event.edit){
      delete event.edit;
      this.classService.updateClassroom(event.id,event).subscribe(response => {
        this.allClassrooms();
      });
    }else{
      this.classService.addClassroom(event).subscribe(response => {
        this.allClassrooms();
      });
    }
  }

  delete(event: any) {
    this.classService.deleteClassroom(event?.id).subscribe(response => {
      this.allClassrooms();
    });
  }



  allClassrooms() {
    this.classService.allClassrooms().subscribe(response => {
      this.classrooms = response.data;
      this.headings = response.headings;
    })
  }
}
