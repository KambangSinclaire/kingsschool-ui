import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/interfaces/course.interface';
import { CourseService } from 'src/app/services/course/course.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  constructor(private router:Router, private courseService:CourseService) { }
  dropDownList: any;
  courses:ICourse[] = [];

  ngOnInit(): void {
    this.allCourses();
  }

  allCourses() {
    this.courseService.allcourses().subscribe(response => {
      this.courses = response.data;
    });
  }
  gotoAddCourses(){
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.course.all}/${ApiRoutes.dashboard.course.crud.add}`]);
  }

}
