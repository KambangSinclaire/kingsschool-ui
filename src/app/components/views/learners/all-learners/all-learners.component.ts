import { Component, OnInit } from '@angular/core';
import { ILearner } from 'src/app/interfaces/learner.interface';
import { LearnersService } from 'src/app/services/learners/learners.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-all-learners',
  templateUrl: './all-learners.component.html',
  styleUrls: ['./all-learners.component.scss']
})
export class AllLearnersComponent implements OnInit {

  todaysDate = new Date(Date.now());

  dropDownList: any;

  // class properties
  routes = {
    details: '/' + ApiRoutes.dashboard.home + '/' + ApiRoutes.dashboard.learner.all + '/' + ApiRoutes.dashboard.learner.crud.details,
    add: ApiRoutes.dashboard.learner.crud.add
  };

  constructor(private learnersService: LearnersService) { }
  learners: ILearner[] = [];

  ngOnInit(): void {
    this.allLearners();
  }

  allLearners() {
    this.learnersService.allLearners("").subscribe(response => {
      this.learners = response.data;
    });
  }
}
