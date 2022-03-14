import { Component, OnInit } from '@angular/core';
import { SelectConfig } from 'src/app/components/shared/select-dropdown/select-dropdown.component';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courseSelectConfig: SelectConfig = {
    name: "Courses"
  }

  selectedValues(event: any) {
    console.log("These are the selected values ", event);
  }
}
