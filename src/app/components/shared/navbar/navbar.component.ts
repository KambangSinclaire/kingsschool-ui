import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IAcademicYear } from 'src/app/interfaces/academic-year.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AcademicYearsService } from 'src/app/services/AcademicYears/academic-years.service';
import { AppStateManager } from 'src/app/state/app.state';
import { LocalStore } from 'src/app/utils/localstore.utils';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private academicYearService: AcademicYearsService,
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
          label:'File',
          icon:'pi pi-fw pi-file',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-plus',
                  items:[
                  {
                      label:'Bookmark',
                      icon:'pi pi-fw pi-bookmark'
                  },
                  {
                      label:'Video',
                      icon:'pi pi-fw pi-video'
                  },

                  ]
              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-trash'
              },
              {
                  separator:true
              },
              {
                  label:'Export',
                  icon:'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Users',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'New',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Search',
                  icon:'pi pi-fw pi-users',
                  items:[
                  {
                      label:'Filter',
                      icon:'pi pi-fw pi-filter',
                      items:[
                          {
                              label:'Print',
                              icon:'pi pi-fw pi-print'
                          }
                      ]
                  },
                  {
                      icon:'pi pi-fw pi-bars',
                      label:'List'
                  }
                  ]
              }
          ]
      },
      {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
              {
                  label:'Edit',
                  icon:'pi pi-fw pi-pencil',
                  items:[
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  },

                  ]
              },
              {
                  label:'Archieve',
                  icon:'pi pi-fw pi-calendar-times',
                  items:[
                  {
                      label:'Remove',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                  ]
              }
          ]
      },
      {
          label:'Quit',
          icon:'pi pi-fw pi-power-off'
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

}
