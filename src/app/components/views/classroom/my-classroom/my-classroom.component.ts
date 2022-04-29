import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-classroom',
  templateUrl: './my-classroom.component.html',
  styleUrls: ['./my-classroom.component.scss']
})
export class MyClassroomComponent implements OnInit {

  constructor() { }

  show_list = false;

  public show: boolean = false;
  public buttonName: any = "Show";
  
  ngOnInit(): void {}
  toggle() {
      this.show = !this.show;
      if (this.show) this.buttonName = "Hide";
      else this.buttonName = "Show";
  }

}
