import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  month = new Date(Date.now()).toISOString();

  constructor() { }

  ngOnInit(): void {
  }

}
