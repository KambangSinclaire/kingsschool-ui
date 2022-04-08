import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllAcademicYearsComponent } from '../components/views/academicYear/all-academic-years/all-academic-years.component';
import { AddAcademicYearComponent } from '../components/views/academicYear/add-academic-year/add-academic-year.component';
import { UpdateAcademicYearComponent } from '../components/views/academicYear/update-academic-year/update-academic-year.component';
import { DetailsComponent } from '../components/views/academicYear/details/details.component';
import { AppRoutingModule } from '../app-routing.module';
import { AcademicYearBaseComponent } from '../components/views/academicYear/academic-year-base/academic-year-base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';



@NgModule({
  declarations: [
    AllAcademicYearsComponent,
    AddAcademicYearComponent,
    UpdateAcademicYearComponent,
    DetailsComponent,
    AcademicYearBaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class AcademicYearModule { }
