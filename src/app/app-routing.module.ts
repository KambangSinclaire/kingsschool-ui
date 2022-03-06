import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AllLevelsComponent } from './components/views/academicLevel/all-levels/all-levels.component';
import { AllAcademicYearsComponent } from './components/views/academicYear/all-academic-years/all-academic-years.component';
import { AuthComponent } from './components/views/auth/auth.component';
import { ProfileComponent } from './components/views/auth/profile/profile.component';
import { AllRoomsComponent } from './components/views/classroom/all-rooms/all-rooms.component';
import { AllLearnersComponent } from './components/views/learners/all-learners/all-learners.component';
import { AllResourcesComponent } from './components/views/resources/all-resources/all-resources.component';
import { StatisticsComponent } from './components/views/statistics/statistics.component';
import { AllTeachersComponent } from './components/views/teachers/all-teachers/all-teachers.component';
import { AuthGuard } from './guards/auth.guard';
import { ApiRoutes } from './utils/routes/app.routes';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent
  },
  {
    path: ApiRoutes.dashboard.home,
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: ApiRoutes.dashboard.classrooms,
        component: AllRoomsComponent
      },
      {
        path: ApiRoutes.dashboard['academic-levels'],
        component: AllLevelsComponent
      },
      {
        path: ApiRoutes.dashboard['academic-years'],
        component: AllAcademicYearsComponent
      },
      {
        path: ApiRoutes.dashboard.teachers,
        component: AllTeachersComponent
      },
      {
        path: ApiRoutes.dashboard.learners,
        component: AllLearnersComponent
      },
      {
        path: ApiRoutes.dashboard.resources,
        component: AllResourcesComponent
      },
      {
        path: ApiRoutes.dashboard.profile,
        component: ProfileComponent
      },
      {
        path: ApiRoutes.dashboard.admins,
        component: AllTeachersComponent
      },
      {
        path: ApiRoutes.dashboard.explore,
        component: StatisticsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
