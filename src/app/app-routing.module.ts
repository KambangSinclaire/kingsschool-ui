import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AuthComponent } from './components/views/auth/auth.component';
import { AllRoomsComponent } from './components/views/classroom/all-rooms/all-rooms.component';
import { ApiRoutes } from './utils/routes/app.routes';

const routes: Routes = [
  {
    path: "",
    component: AuthComponent
  },
  {
    path: ApiRoutes.dashboard.home,
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: ApiRoutes.dashboard.classrooms,
        component: AllRoomsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
