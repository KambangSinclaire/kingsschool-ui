import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SharedModule } from './shared.module';
import { ClassroomModule } from './classroom.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClassroomModule,
    AppRoutingModule
  ]
})
export class DashboardModule { }
