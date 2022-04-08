import { Component, OnInit } from '@angular/core';
import { IAcademicYear } from 'src/app/interfaces/academic-year.interface';
import { AcademicYearsService } from 'src/app/services/AcademicYears/academic-years.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-academic-years',
  templateUrl: './all-academic-years.component.html',
  styleUrls: ['./all-academic-years.component.scss']
})
export class AllAcademicYearsComponent implements OnInit {

  constructor(private academicYearService: AcademicYearsService) { }

  dropDownList: any;
  academicYears: IAcademicYear[] = [];
routes= ApiRoutes;
  routePaths = {
    details: '/' + ApiRoutes.dashboard.home + '/' + ApiRoutes.dashboard.classroom.all + '/' + ApiRoutes.dashboard.classroom.crud.details,
    add: ApiRoutes.dashboard.classroom.crud.add
  };

  ngOnInit(): void {
    this.getAcademicYears();
  }

  getAcademicYears() {
    this.academicYearService.allAcademicYears("").subscribe(response => {
      this.academicYears = response.data;
    })
  }
}
