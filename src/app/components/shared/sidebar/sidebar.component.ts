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

  ngOnInit(): void {
  }

  gotoTeachers(){
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.teachers}`])
  }
  gotoClassrooms(){
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.classrooms}`])
  }
  logout() {
    localStorage.clear();
    this.router.navigate([ApiRoutes.dashboard.login]);
  }
}
