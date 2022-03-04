import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTeachersComponent } from '../components/views/teachers/all-teachers/all-teachers.component';
import { TeacherDetailsComponent } from '../components/views/teachers/teacher-details/teacher-details.component';
import { UpdateTeacherComponent } from '../components/views/teachers/update-teacher/update-teacher.component';



@NgModule({
  declarations: [
    AllTeachersComponent,
    TeacherDetailsComponent,
    UpdateTeacherComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeachersModule { }
