import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAcademicLevel } from 'src/app/interfaces/academic-level.interface';
import { ICourse } from 'src/app/interfaces/course.interface';
import { AcademicLevelsService } from 'src/app/services/AcademicLevels/academic-levels.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-levels',
  templateUrl: './all-levels.component.html',
  styleUrls: ['./all-levels.component.scss']
})
export class AllLevelsComponent implements OnInit {

  constructor(private router:Router, private academicLevelService:AcademicLevelsService) { }
  dropDownList: any;
  academicLevels:IAcademicLevel[] = [];
  routes = ApiRoutes;


  ngOnInit(): void {
    this.allacademicLevels();
  }

  allacademicLevels() {
    this.academicLevelService.allAcademicLevels("").subscribe(response => {
      this.academicLevels = response.data;
      console.log('here all levels ', this.academicLevels);
      
    });
  }
  gotoAddAcademicLevels(){
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard['academic-level'].all}/${ApiRoutes.dashboard['academic-level'].crud.add}`]);
  }

}
