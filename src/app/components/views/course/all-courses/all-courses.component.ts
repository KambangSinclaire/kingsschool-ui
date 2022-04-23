import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/interfaces/course.interface';
import { CourseService } from 'src/app/services/course/course.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit, OnChanges {

  constructor(private router: Router, private courseService: CourseService) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.allCourses();
  }


  courses: ICourse[] = [];

  headings: string[] = [];

  formFields: any[] = [
    { field: 'title', type: 'text' },
    { field: 'description', type: 'textarea' },
    { field: 'pass_mark', type: 'number' },
    { field: 'credit_value', type: 'number' },
    { field: 'short_form', type: 'text' }
  ];

  selectOptions: any[] = [{ label: 'INSTOCK', value: 'instock' }]

  options: any = { name: "course", plural: 'courses' }

  routes = ApiRoutes;

  ngOnInit(): void {
    this.allCourses();
  }

  allCourses() {
    this.courseService.allcourses().subscribe(response => {
      this.courses = response.data;
      this.headings = response.headings;
    });
  }
  gotoAddCourses() {
    this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.course.all}/${ApiRoutes.dashboard.course.crud.add}`]);
  }

  create(event: any) {
    this.courseService.addCourse(event).subscribe(response => {
      this.allCourses();
    });
  }

  edit(event: any) {
    this.courseService.updateCourse(event.id,event).subscribe(response => {
      this.allCourses();
    });
  }

  delete(event: any) {
    this.courseService.deleteCourse(event).subscribe(response => {
      this.allCourses();
    });
  }

}
