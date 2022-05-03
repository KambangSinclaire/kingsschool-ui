import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SelectConfig } from 'src/app/components/shared/select-dropdown/select-dropdown.component';
import { IClassroom } from 'src/app/interfaces/classroom.interface';
import { ICourse } from 'src/app/interfaces/course.interface';
import { AcademicLevelsService } from 'src/app/services/AcademicLevels/academic-levels.service';
import { ClassroomService } from 'src/app/services/classroom/classroom.service';
import { CourseService } from 'src/app/services/course/course.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.scss']
})
export class AddLevelComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private academicLevel: AcademicLevelsService,
    private courseService: CourseService,
    private classroomService: ClassroomService
  ) { }

  academicLevelForm = this.formBuilder.group({
    name: ["", Validators.required],
    level: ["", Validators.required],
    description: ["", Validators.required],
    objectives: [[], !Validators.required],
    courses: [[], Validators.required],
    classrooms: [[], Validators.required]
  });

  courses: ICourse[] = [];
  selectedCoursesIds: string[] = []
  selectedClassesIds: string[] = []
  classes: IClassroom[] = [];
  courseSelectConfig: SelectConfig = {
    name: "Courses"
  }

  classSelectConfig: SelectConfig = {
    name: "Classes"
  }

  ngOnInit(): void {
    this.allClases();
    this.allCourses();
  }

  createNewLevel() {
    this.academicLevelForm.patchValue({ courses: this.selectedClassesIds, classrooms: this.selectedClassesIds });
    if (this.academicLevelForm.valid) {
      this.academicLevel.addAcademicLevel(this.academicLevelForm.value).subscribe(response => {
        console.log("Response data", response);
      });
    }
  }

  allCourses() {
    this.courseService.allcourses().subscribe(response => {
      this.courses = response.data;
      console.log("Response data", response);
    });
  }

  allClases() {
    this.classroomService.allClassrooms().subscribe(response => {
      this.classes = response.data;
      console.log("Response data for classes", response);
    });
  }

  selectedCourses(event: any) {
    const value = event?.target?.value;
    const checked = event?.target?.checked
    if (value && checked && !this.selectedCoursesIds.includes(value)) {
      this.selectedCoursesIds.push(value);
    }
    this.academicLevelForm.patchValue({ courses: this.selectedCoursesIds });
  }
  selectedClasses(event: any) {
    const value = event?.target?.value;
    const checked = event?.target?.checked
    if (value && checked && !this.selectedClassesIds.includes(value)) {
      this.selectedClassesIds.push(value);
    }
    this.academicLevelForm.patchValue({classrooms: this.selectedClassesIds });
  }
}
