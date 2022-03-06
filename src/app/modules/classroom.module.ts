import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoomsComponent } from '../components/views/classroom/all-rooms/all-rooms.component';
import { ClassDetailsComponent } from '../components/views/classroom/class-details/class-details.component';
import { AddClassroomComponent } from '../components/views/classroom/add-classroom/add-classroom.component';
import { UpdateClassroomComponent } from '../components/views/classroom/update-classroom/update-classroom.component';



@NgModule({
  declarations: [
    AllRoomsComponent,
    ClassDetailsComponent,
    AddClassroomComponent,
    UpdateClassroomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassroomModule { }
