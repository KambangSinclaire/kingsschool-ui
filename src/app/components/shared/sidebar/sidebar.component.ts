import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppStateManager } from 'src/app/state/app.state';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private state: AppStateManager) { }

  routes = ApiRoutes;

  user: Observable<Partial<IUser>> = this.state.getUserState();

  ngOnInit(): void {
  }

  gotoTeachers() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.teacher.all}`])
  }
  gotoClassrooms() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.classroom.all}`])
  }
  logout() {
    localStorage.clear();
    this.router.navigate([ApiRoutes.dashboard.login]);
  }
  gotoAddDocument() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.resource.all}`])
  }
  gotoHome() {
    this.router.navigate([`${ApiRoutes.dashboard.home}`])
  }

  gotoStatistics() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.explore}`]);
  }

  gotoSettings() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.profile}`]);
  }
  gotoChatRoom() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.inbox}`]);
   }
  gotoAdmins() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.admins}`]);
  }
  gotoHelpCenter() { }

  gotoLearners() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.learner.all}`]);
  }

  gotoCourses() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.course.all}`]);
  }

  gotoAcademicLevels() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard['academic-level'].all}`]);
  }

  gotoAcademicYears() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard['academic-year'].all}`]);
  }

  gotoLectures() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.lecture.all}`]);
  }

}
