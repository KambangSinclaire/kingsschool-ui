import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CourseService } from 'src/app/services/course/course.service';
import { FileHandler } from 'src/app/utils/file-handler.utils';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private fileUpload: FileHandler) { }

  courseForm = this.formBuilder.group({
    title: ["", Validators.required],
    short_form:["", Validators.required],
    pass_mark:["", Validators.required],
    credit_value:["", Validators.required],
    description: ["", Validators.required],
    // photo: [""]
  });

  selectedFile: string = "";

  ngOnInit(): void {
  }

  createCourse() {
    if (this.courseForm.valid) {
        //upload course data
        this.courseService.addCourse(this.courseForm.value).subscribe(response => {
          console.log("Response data", response);
        });
    }
  }

  // Still to be implemented
  /*fileHandler(event: any) {
    const files = Array.from(event.target.files);
    this.courseForm.get('photo')?.setValue(files[0] as any);
    this.selectedFile = this.fileUpload.single(files)
  }

  ngOnDestroy() {
    URL.revokeObjectURL(this.selectedFile)
  }
*/

}
