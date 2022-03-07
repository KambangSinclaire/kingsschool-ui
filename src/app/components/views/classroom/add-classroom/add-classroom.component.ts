import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClassroomService } from 'src/app/services/classroom/classroom.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.scss']
})
export class AddClassroomComponent implements OnInit {

  constructor(private classService: ClassroomService, private formBuilder: FormBuilder) { }
  classForm = this.formBuilder.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    capacity: ["", Validators.required],
    color: [""]
  })

  ngOnInit(): void {
  }

  createClass() {
    if (this.classForm.valid) {
      this.classService.addClassroom(this.classForm.value).subscribe(response => {
        console.log('Response', response);
      })
    }
  }
}
