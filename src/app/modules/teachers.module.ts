import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTeachersComponent } from '../components/views/teachers/all-teachers/all-teachers.component';
import { TeacherDetailsComponent } from '../components/views/teachers/teacher-details/teacher-details.component';
import { UpdateTeacherComponent } from '../components/views/teachers/update-teacher/update-teacher.component';
import { AddTeacherComponent } from '../components/views/teachers/add-teacher/add-teacher.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherBaseComponent } from '../components/views/teachers/teacher-base/teacher-base.component';
import { SharedModule } from './shared.module';




@NgModule({
  declarations: [
    AllTeachersComponent,
    TeacherDetailsComponent,
    UpdateTeacherComponent,
    AddTeacherComponent,
    TeacherBaseComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TeachersModule { }
