import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppStateManager } from 'src/app/state/app.state';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private state: AppStateManager) { }

  timeNow = new Date(Date.now());
  greeting = this.timeNow.getHours() >= 12 && this.timeNow.getHours() <= 16 ? "Good afternoon" : (new Date(Date.now()).getHours() < 12 ? "Good morning" : "Good evening");

  user: Observable<Partial<IUser>> = this.state.getUserState();

  ngOnInit(): void {
  }

}
