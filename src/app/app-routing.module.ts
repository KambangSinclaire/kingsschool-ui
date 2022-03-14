import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AcademicLevelBaseComponent } from './components/views/academicLevel/academic-level-base/academic-level-base.component';
import { AddLevelComponent } from './components/views/academicLevel/add-level/add-level.component';
import { AllLevelsComponent } from './components/views/academicLevel/all-levels/all-levels.component';
import { LevelDetailsComponent } from './components/views/academicLevel/level-details/level-details.component';
import { AllAcademicYearsComponent } from './components/views/academicYear/all-academic-years/all-academic-years.component';
import { AuthComponent } from './components/views/auth/auth.component';
import { ProfileComponent } from './components/views/auth/profile/profile.component';
import { AddClassroomComponent } from './components/views/classroom/add-classroom/add-classroom.component';
import { AllRoomsComponent } from './components/views/classroom/all-rooms/all-rooms.component';
import { BaseComponent } from './components/views/classroom/base/base.component';
import { ClassDetailsComponent } from './components/views/classroom/class-details/class-details.component';
import { AddCourseComponent } from './components/views/course/add-course/add-course.component';
import { AllCoursesComponent } from './components/views/course/all-courses/all-courses.component';
import { CourseBaseComponent } from './components/views/course/course-base/course-base.component';
import { CourseDetailsComponent } from './components/views/course/course-details/course-details.component';
import { AddLearnerComponent } from './components/views/learners/add-learner/add-learner.component';
import { AllLearnersComponent } from './components/views/learners/all-learners/all-learners.component';
import { LearnerBaseComponent } from './components/views/learners/learner-base/learner-base.component';
import { LearnerDetailsComponent } from './components/views/learners/learner-details/learner-details.component';
import { AllResourcesComponent } from './components/views/resources/all-resources/all-resources.component';
import { StatisticsComponent } from './components/views/statistics/statistics.component';
import { AddTeacherComponent } from './components/views/teachers/add-teacher/add-teacher.component';
import { AllTeachersComponent } from './components/views/teachers/all-teachers/all-teachers.component';
import { TeacherBaseComponent } from './components/views/teachers/teacher-base/teacher-base.component';
import { TeacherDetailsComponent } from './components/views/teachers/teacher-details/teacher-details.component';
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
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: ApiRoutes.dashboard.classroom.all,
        component: BaseComponent,
        children: [
          {
            path: "",
            component: AllRoomsComponent
          },
          {
            path: ApiRoutes.dashboard.classroom.crud.details + "/:id",
            component: ClassDetailsComponent
          },
          {
            path: ApiRoutes.dashboard.classroom.crud.add,
            component: AddClassroomComponent
          },
        ]
      },
      {
        path: ApiRoutes.dashboard.learner.all,
        component: LearnerBaseComponent,
        children: [
          {
            path: "",
            component: AllLearnersComponent
          },
          {
            path: ApiRoutes.dashboard.learner.crud.details + "/:id",
            component: LearnerDetailsComponent
          },
          {
            path: ApiRoutes.dashboard.learner.crud.add,
            component: AddLearnerComponent
          },
        ]
      },
      {
        path: ApiRoutes.dashboard.teacher.all,
        component: TeacherBaseComponent,
        children: [
          {
            path: "",
            component: AllTeachersComponent
          },
          {
            path: ApiRoutes.dashboard.teacher.crud.details + "/:id",
            component: TeacherDetailsComponent
          },
          {
            path: ApiRoutes.dashboard.teacher.crud.add,
            component: AddTeacherComponent
          }
        ]
      },
      {
        path: ApiRoutes.dashboard.course.all,
        component: CourseBaseComponent,
        children: [
          {
            path: "",
            component: AllCoursesComponent
          },
          {
            path: ApiRoutes.dashboard.course.crud.details + "/:id",
            component: CourseDetailsComponent
          },
          {
            path: ApiRoutes.dashboard.course.crud.add,
            component: AddCourseComponent
          }
        ]
      },
      {
        path: ApiRoutes.dashboard['academic-level'].all,
        component: AcademicLevelBaseComponent,
        children: [
          {
            path: "",
            component: AllLevelsComponent
          },
          {
            path: ApiRoutes.dashboard['academic-level'].crud.details + "/:id",
            component: LevelDetailsComponent
          },
          {
            path: ApiRoutes.dashboard['academic-level'].crud.add,
            component: AddLevelComponent
          }
        ]
      },
      {
        path: ApiRoutes.dashboard['academic-year'].all,
        component: AllAcademicYearsComponent
      },
      {
        path: ApiRoutes.dashboard.resource.all,
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
