import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SelectConfig } from 'src/app/components/shared/select-dropdown/select-dropdown.component';
import { IAcademicLevel } from 'src/app/interfaces/academic-level.interface';
import { ICourse } from 'src/app/interfaces/course.interface';
import { AcademicLevelsService } from 'src/app/services/AcademicLevels/academic-levels.service';
import { CourseService } from 'src/app/services/course/course.service';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { FileHandler } from 'src/app/utils/file-handler.utils';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private academicLevelService: AcademicLevelsService,
    private courseService:CourseService,
    private teachersService:TeachersService,
    private fileUpload: FileHandler) { }

  ngOnInit(): void {
    this.getAcademicLevels();
    this.getCourses();
  }

  selectedFile: string = "";
  academicLevels: IAcademicLevel[] = []
  courses: ICourse[] = []

  teachersForm = this.formBuilder.group({
    first_name: ["", Validators.required],
    last_name: ["", Validators.required],
    email: ["", Validators.required],
    address: ["", Validators.required],
    courses: [[], Validators.required],
    academic_level: [[], Validators.required],
    state: ["", Validators.required],
    zipcode: ["", Validators.required],
    city: ["", Validators.required],
    country: ["", Validators.required],
    gender: ["", Validators.required],
    profile_photo: [""]
  });


  courseSelectConfig: SelectConfig = {
    name: "Courses"
  }

  academicLevelSelectConfig: SelectConfig = {
    name: "Levels to teach"
  }

  selectedLevels(event: any) {
    const value = event?.target?.value;
    const checked = event?.target?.checked
    if (value && checked) {
      this.teachersForm.patchValue({ academic_level: value });
    }
  }

  selectedCourses(event: any) {
    const value = event?.target?.value;
    const checked = event?.target?.checked
    if (value && checked) {
      this.teachersForm.patchValue({ courses: value });
    }
  }

  fileHandler(event: any) {
    const files = Array.from(event.target.files);
    this.teachersForm.get('profile_photo')?.setValue(files[0] as any);
    this.selectedFile = this.fileUpload.single(files)
  }


  createTeacher() {
    if (this.teachersForm.valid) {
      // dynamically added forms
      this.teachersForm.setControl('username', this.formBuilder.control(this.teachersForm.get('first_name')?.value));
      this.teachersForm.setControl('password', this.formBuilder.control('password2'))

      // for file upload
      const formData = new FormData();
      formData.append('file', this.teachersForm.get('profile_photo')?.value);
      this.fileUpload.fileUpload(formData).subscribe(file => {

        this.teachersForm.patchValue({ 'profile_photo': file?.image });

        //upload Teacher data
        this.teachersService.addTeacher(this.teachersForm.value).subscribe(response => {
          console.log("Response data", response);
        });

      });
    }
  }

  getAcademicLevels() {
    this.academicLevelService.allAcademicLevels("").subscribe(response => {
      this.academicLevels = response.data;
    });
  }

  getCourses() {
    this.courseService.allcourses().subscribe(response => {
      this.courses = response.data;
    });
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.selectedFile)
  }
}
