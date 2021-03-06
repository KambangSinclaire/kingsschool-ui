import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { IAcademicYear } from 'src/app/interfaces/academic-year.interface';
import { IStatistics } from 'src/app/interfaces/statistics.interface';
import { StatisticsService } from 'src/app/services/statistics/statistics.service';
import { AppStateManager } from 'src/app/state/app.state';
import { LocalStore } from 'src/app/utils/localstore.utils';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private statisticsService: StatisticsService, private state: AppStateManager) { }

  routes = ApiRoutes.api;

  month = new Date(Date.now()).toISOString();
  expenses = [{
    name: "Fix benches",
    description: "Spoiled benches in school",
    cost: 16700,
    status: "Unpaid",
  },
  {
    name: "Buy Computers",
    description: "Buy brand new computers",
    cost: 1000000,
    status: "Paid",
  },
  {
    name: "Rent footballs",
    description: "Rent footballs from bokwaongo boys",
    cost: 1000,
    status: "Partially Paid",
  }];

  loggedInTeachers:any = []

  projects = {
    percentage: 10,
    name: "Admin Block",
    description: "Building of a new admin block for top academic staff ",
    startDate: new Date(Date.now()).toISOString().split('T')[0],
    endDate: new Date(Date.now()).toISOString().split('T')[0],
    priority: "high" || "medium" || "low",
    status: "in progress" || "completed" || "not started",
    color: "red",
    createdAt: "",
    updatedAt: "",
    owner_id: "",
  }

  activeAcademicYear: IAcademicYear = {
    percentage: 10,
    name: new Date(Date.now()).getUTCFullYear().toString(),
    description: new Date(Date.now()).toISOString().split('T')[0],
    startDate: new Date(Date.now()).toISOString().split('T')[0],
    endDate: new Date(Date.now()).toISOString().split('T')[0],
    goals: [],
    activities: [],
    is_active: true,
    color: "red",
    createdAt: "",
    updatedAt: "",
    owner_id: "",
    id: "1"
  }

  statistics: Partial<IStatistics> = {
    all_learners: 600,
    all_teachers: 60,
    totalExpenditure: 500000,
    totalFeesPaid: 200000000,
  }

  ngOnInit(): void {
    this.getAllStatistics();
    this.state.getUserState().subscribe(data => {
      this.activeAcademicYear = data?.academic_year as any;
    });

    // this.pullStatistics()

  }

  getAllStatistics() {
    this.statisticsService.getAllStatistics().subscribe(response => {
      LocalStore.setItem("stats", response.data);
      this.state.setStatistics(response.data);
      this.statistics = response.data.statistics;
      this.loggedInTeachers = this.statistics.logged_in_teachers
    })
  }

  // pullStatistics() {
  //   this.statisticsService.pullStatistics().onmessage = (event) => {
  //     this.statistics = JSON.parse(event.data);
  //     console.log("Pulled statistics ",this.statistics); 
  //   }
  // }

}
