import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }
  routes = ApiRoutes;
  ngOnInit(): void {
  }

  gotoTeachers() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.teachers}`])
  }
  gotoClassrooms() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.classrooms}`])
  }
  logout() {
    localStorage.clear();
    this.router.navigate([ApiRoutes.dashboard.login]);
  }
  gotoAddDocument() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.resources}`])
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
  gotoChatRoom() { }
  gotoAdmins() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.admins}`]);
  }
  gotoHelpCenter() { }

  gotoLearners() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.learners}`]);
  }






}
