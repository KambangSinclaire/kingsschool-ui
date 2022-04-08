import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IAcademicYear } from 'src/app/interfaces/academic-year.interface';
import { IUser } from 'src/app/interfaces/user.interface';
import { AcademicYearsService } from 'src/app/services/AcademicYears/academic-years.service';
import { AppStateManager } from 'src/app/state/app.state';
import { LocalStore } from 'src/app/utils/localstore.utils';

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

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(query => {
      console.log("Params ", query);
    })
    this.getAcademicYears();
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
