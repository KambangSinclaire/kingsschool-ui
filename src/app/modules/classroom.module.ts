import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRoomsComponent } from '../components/views/classroom/all-rooms/all-rooms.component';
import { ClassDetailsComponent } from '../components/views/classroom/class-details/class-details.component';
import { AddClassroomComponent } from '../components/views/classroom/add-classroom/add-classroom.component';
import { UpdateClassroomComponent } from '../components/views/classroom/update-classroom/update-classroom.component';
import { AppRoutingModule } from '../app-routing.module';
import { BaseComponent } from '../components/views/classroom/base/base.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllRoomsComponent,
    ClassDetailsComponent,
    AddClassroomComponent,
    UpdateClassroomComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClassroomModule { }
