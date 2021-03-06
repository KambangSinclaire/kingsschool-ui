import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatroomComponent } from './components/shared/chatroom/chatroom.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AcademicLevelBaseComponent } from './components/views/academicLevel/academic-level-base/academic-level-base.component';
import { AddLevelComponent } from './components/views/academicLevel/add-level/add-level.component';
import { AllLevelsComponent } from './components/views/academicLevel/all-levels/all-levels.component';
import { LevelDetailsComponent } from './components/views/academicLevel/level-details/level-details.component';
import { AcademicYearBaseComponent } from './components/views/academicYear/academic-year-base/academic-year-base.component';
import { AddAcademicYearComponent } from './components/views/academicYear/add-academic-year/add-academic-year.component';
import { AllAcademicYearsComponent } from './components/views/academicYear/all-academic-years/all-academic-years.component';
import { DetailsComponent } from './components/views/academicYear/details/details.component';
import { LoginComponent } from './components/views/auth/login/login.component';
import { ProfileComponent } from './components/views/auth/profile/profile.component';
import { SignupComponent } from './components/views/auth/signup/signup.component';
import { AddClassroomComponent } from './components/views/classroom/add-classroom/add-classroom.component';
import { AllRoomsComponent } from './components/views/classroom/all-rooms/all-rooms.component';
import { BaseComponent } from './components/views/classroom/base/base.component';
import { ClassDetailsComponent } from './components/views/classroom/class-details/class-details.component';
import { MyClassroomComponent } from './components/views/classroom/my-classroom/my-classroom.component';
import { AddCourseComponent } from './components/views/course/add-course/add-course.component';
import { AllCoursesComponent } from './components/views/course/all-courses/all-courses.component';
import { CourseBaseComponent } from './components/views/course/course-base/course-base.component';
import { CourseDetailsComponent } from './components/views/course/course-details/course-details.component';
import { RegisterCourseComponent } from './components/views/course/register-course/register-course.component';
import { AddLearnerComponent } from './components/views/learners/add-learner/add-learner.component';
import { AllLearnersComponent } from './components/views/learners/all-learners/all-learners.component';
import { LearnerBaseComponent } from './components/views/learners/learner-base/learner-base.component';
import { LearnerDetailsComponent } from './components/views/learners/learner-details/learner-details.component';
import { AddLectureComponent } from './components/views/lecture/add-lecture/add-lecture.component';
import { AllLecturesComponent } from './components/views/lecture/all-lectures/all-lectures.component';
import { EditorComponent } from './components/views/lecture/editor/editor.component';
import { LectureBaseComponent } from './components/views/lecture/lecture-base/lecture-base.component';
import { FeesComponent } from './components/views/payments/fees/fees.component';
import { AllResourcesComponent } from './components/views/resources/all-resources/all-resources.component';
import { StatisticsComponent } from './components/views/statistics/statistics.component';
import { AddTeacherComponent } from './components/views/teachers/add-teacher/add-teacher.component';
import { AllTeachersComponent } from './components/views/teachers/all-teachers/all-teachers.component';
import { MyOfficeComponent } from './components/views/teachers/my-office/my-office.component';
import { TeacherBaseComponent } from './components/views/teachers/teacher-base/teacher-base.component';
import { TeacherDetailsComponent } from './components/views/teachers/teacher-details/teacher-details.component';
import { AuthGuard } from './guards/auth.guard';
import { ApiRoutes } from './utils/routes/app.routes';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "app/register",
    component: SignupComponent
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
        path: ApiRoutes.dashboard.fee.all,
        component: FeesComponent,
        // children: [
        //   {
        //     path: "",
        //     component: AllLearnersComponent
        //   },
        //   {
        //     path: ApiRoutes.dashboard.learner.crud.details + "/:id",
        //     component: LearnerDetailsComponent
        //   },
        //   {
        //     path: ApiRoutes.dashboard.learner.crud.add,
        //     component: AddLearnerComponent
        //   },
        // ]
      },
      {
        path: ApiRoutes.dashboard.myClass,
        component: MyClassroomComponent
      },
      {
        path: ApiRoutes.dashboard.myOffice,
        component: MyOfficeComponent,
        children:[
          {
            path: "",
            component: TeacherDetailsComponent
          }
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
          },
          {
            path: ApiRoutes.dashboard.course.register + "/:id",
            component: RegisterCourseComponent
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
        component: AcademicYearBaseComponent,
        children: [
          {
            path: "",
            component: AllAcademicYearsComponent
          },
          {
            path: ApiRoutes.dashboard.classroom.crud.details + "/:id",
            component: DetailsComponent
          },
          {
            path: ApiRoutes.dashboard.classroom.crud.add,
            component: AddAcademicYearComponent
          },
        ]
      },
      {
        path: ApiRoutes.dashboard.lecture.all,
        component: LectureBaseComponent,
        children: [
          {
            path: "",
            component: AllLecturesComponent
          },
          {
            path: ApiRoutes.dashboard.lecture.crud.details + "/:id",
            component: EditorComponent
          },
          {
            path: ApiRoutes.dashboard.classroom.crud.add,
            component: AddLectureComponent
          },
        ]
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
        path: ApiRoutes.dashboard.inbox,
        component: ChatroomComponent
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
