import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../components/shared/alert/alert.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { HomeComponent } from '../components/shared/home/home.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { CalendarComponent } from '../components/shared/calendar/calendar.component';
import { MessageInboxComponent } from '../components/shared/message-inbox/message-inbox.component';
import { AppRoutingModule } from '../app-routing.module';
import { SelectDropdownComponent } from '../components/shared/select-dropdown/select-dropdown.component';
import { SafeImageUrlPipe } from '../utils/pipes/safe-image-url.pipe';
import { DirectivesModule } from './directives.module';
import { CanPerformDirective } from '../directives/can-perform.directive';
import { StatisticsChartComponent } from '../components/shared/statistics-chart/statistics-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';


const components = [
  AlertComponent,
  NavbarComponent,
  HomeComponent,
  SidebarComponent,
  CalendarComponent,
  MessageInboxComponent,
  SelectDropdownComponent,
  CanPerformDirective,
  SafeImageUrlPipe,
]
@NgModule({
  declarations: [
    components,
    StatisticsChartComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    HighchartsChartModule,
    AppRoutingModule
  ],
  exports: [components]
})
export class SharedModule { }
