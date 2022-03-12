import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValues(event: any) {
    console.log("These are the selected values ", event);
  }
}
