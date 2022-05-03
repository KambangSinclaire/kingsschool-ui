import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemesterDetailsComponent } from '../components/views/semester/semester-details/semester-details.component';
import { UpdateSemesterComponent } from '../components/views/semester/update-semester/update-semester.component';
import { SemesterBaseComponent } from '../components/views/semester/semester-base/semester-base.component';
import { AddSemesterComponent } from '../components/views/semester/add-semester/add-semester.component';
import { AllSemestersComponent } from '../components/views/semester/all-semesters/all-semesters.component';



@NgModule({
  declarations: [
    AddSemesterComponent,
    AllSemestersComponent,
    SemesterDetailsComponent,
    UpdateSemesterComponent,
    SemesterBaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SemesterModule { }
