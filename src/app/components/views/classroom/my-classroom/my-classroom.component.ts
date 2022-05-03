import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
  
  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
        // routerLink: ['/fees']
          {label: 'Edit Profile', icon: 'pi pi-fw pi-pencil',},
          {label: 'Resources', icon: 'pi pi-fw pi-download'},
          {label: 'Transactions', icon: 'pi pi-fw pi-credit-card'},
          {label: 'Undo', icon: 'pi pi-fw pi-refresh'},
          {label: 'Statistics', icon: 'pi pi-fw pi-chart-line'}
      ];
  }
  
  toggle() {
      this.show = !this.show;
      if (this.show) this.buttonName = "Hide";
      else this.buttonName = "Show";
  }

}
