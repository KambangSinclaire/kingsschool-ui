import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseBaseComponent } from '../components/views/course/course-base/course-base.component';
import { AddCourseComponent } from '../components/views/course/add-course/add-course.component';
import { AllCoursesComponent } from '../components/views/course/all-courses/all-courses.component';
import { CourseDetailsComponent } from '../components/views/course/course-details/course-details.component';
import { UpdateCourseComponent } from '../components/views/course/update-course/update-course.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';



@NgModule({
  declarations: [
    CourseBaseComponent,
    AddCourseComponent,
    AllCoursesComponent,
    CourseDetailsComponent,
    UpdateCourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
