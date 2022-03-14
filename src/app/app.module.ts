import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth.module';
import { DashboardModule } from './modules/dashboard.module';
import { SharedModule } from './modules/shared.module';
import { ResponseInterceptor } from './interceptors/response/response.interceptor';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { LearnersModule } from './modules/learners.module';
import { ResourceModule } from './modules/resource.module';
import { ClassroomModule } from './modules/classroom.module';
import { TeachersModule } from './modules/teachers.module';
import { FileUploadInterceptor } from './interceptors/file-upload/file-upload.interceptor';
import { CourseModule } from './modules/course.module';
import { AcademicLevelModule } from './modules/academic-level.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    SharedModule,
    ResourceModule,
    AuthModule,
    LearnersModule,
    ClassroomModule,
    TeachersModule,
    CourseModule,
    AcademicLevelModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
