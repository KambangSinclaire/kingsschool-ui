import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-office',
  templateUrl: './my-office.component.html',
  styleUrls: ['./my-office.component.scss']
})
export class MyOfficeComponent implements OnInit {

  isList!: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;
  constructor() {}
  ngOnInit(): void {}

}
