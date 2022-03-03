import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoomsComponent } from '../components/views/classroom/all-rooms/all-rooms.component';
import { ClassDetailsComponent } from '../components/views/classroom/class-details/class-details.component';



@NgModule({
  declarations: [
    AllRoomsComponent,
    ClassDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClassroomModule { }
