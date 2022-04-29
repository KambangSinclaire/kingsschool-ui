import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAcademicYear } from 'src/app/interfaces/academic-year.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AcademicYearsService } from 'src/app/services/AcademicYears/academic-years.service';
import { AppStateManager } from 'src/app/state/app.state';
import { LocalStore } from 'src/app/utils/localstore.utils';
import { MenuItem } from 'primeng/api';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private academicYearService: AcademicYearsService,
    private router: Router,
    private state: AppStateManager
  ) { }

  academicYears: IAcademicYear[] = [];

  user: Observable<Partial<IUser>> = this.state.getUserState();

  items!: MenuItem[];


  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(query => {
      console.log("Params ", query);
    })
    this.getAcademicYears();

    this.items = [
      {
        label: 'Menu',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-th-large',
            command: () => { 
              this.gotoHome();
            },
          },
          {
            label: 'Learners',
            icon: 'pi pi-fw pi-user',
            command: () => { 
              this.gotoLearners();
            },
          },
          {
            label: 'Courses',
            icon: 'pi pi-fw pi-book ',
            command: () => { 
              this.gotoCourses();
            },
          },
          {
            label: 'Classrooms',
            icon: 'pi pi-fw pi-table',
            command: () => {
              this.gotoClassrooms();
             },
          },
          {
            label: 'Teachers',
            icon: 'pi pi-fw pi-user',
            command: () => {
              this.gotoTeachers()
             },
          },
          {
            label: 'Lectures',
            icon: 'pi pi-fw pi-file',
            command: () => {
              this.gotoLectures();
             },
          },
          {
            label: 'Fees',
            icon: 'pi pi-fw pi-credit-card',
            command: () => {
             this.gotoFees()
             },
          },
          {
            label: 'Academic Levels',
            icon: 'pi pi-fw pi-sliders-v',
            command: () => {
              this.gotoAcademicLevels();
            }
          },
          {
            label: 'Academic Years',
            icon: 'pi pi-fw pi-calendar',
            command: () => {
              this.gotoAcademicYears();
            }
          },
          {
            label: 'Chatroom',
            icon: 'pi pi-fw pi-comments',
            command: () => { 
              this.gotoChatRoom();
            },
          },
          {
            label: 'Help',
            icon: 'pi pi-fw pi-question-circle',
            command: () => { 
              this.gotoHelpCenter();
            },
          },
          {
            label: 'Settings',
            icon: 'pi pi-fw pi-cog',
            command: () => {
              this.gotoSettings();
             },
          }
        ]
      },
      {
        label: 'My Class',
        icon: 'pi pi-fw pi-table',
        command: () => {
          this.gotoMyClass();
        }
      },
      {
        label: 'My Office',
        icon: 'pi pi-fw pi-table',
        command: () => {
          this.gotoMyOffice();
        }
      }
    ];

  }


  getAcademicYears() {
    this.academicYearService.allAcademicYears("").subscribe(response => {
      this.academicYears = response.data;
    })
  }

  changeAcademic(event: any) {
    this.academicYearService.setActiveAcademicYear(true, event.target.value).subscribe(response => {
      const responseData: IUser = response.data;
      LocalStore.setItem('token', responseData.refresh_token);
      window.location.reload();
    })
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

  gotoFees() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.fee.all}`]);
  }

  gotoMyClass() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.myClass}`]);
  }

  gotoMyOffice() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.myOffice}`]);
  }
}
