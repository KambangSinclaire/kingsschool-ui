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
import { CanPerformDirective } from '../directives/permission/can-perform.directive';
import { StatisticsChartComponent } from '../components/shared/statistics-chart/statistics-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoaderComponent } from '../components/shared/loader/loader.component';
import { AutoFocusDirective } from '../directives/auto-focus/auto-focus.directive';
import { ChatroomComponent } from '../components/shared/chatroom/chatroom.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { PrimengModule } from './primeng.module';
import { DataTableComponent } from '../components/shared/data-table/data-table.component';
import { ChartsDisplayComponent } from '../components/shared/charts-display/charts-display.component';

const config: SocketIoConfig = {
  url: 'http://localhost:8080/kings/communication', options: {
    extraHeaders: {
      authorization: 'Bearer ' + localStorage.getItem('token'),
      'x-api-key': localStorage.getItem('apiKey') ?? ""
    }
  }
};

const components = [
  AlertComponent,
  NavbarComponent,
  HomeComponent,
  SidebarComponent,
  CalendarComponent,
  MessageInboxComponent,
  SelectDropdownComponent,
  CanPerformDirective,
  AutoFocusDirective,
  SafeImageUrlPipe,
  ChatroomComponent,
  StatisticsChartComponent,
  LoaderComponent,
  ChatroomComponent,
  DataTableComponent,
  ChartsDisplayComponent
]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    PrimengModule,
    ReactiveFormsModule,
    DirectivesModule,
    HighchartsChartModule,
    AppRoutingModule
  ],
  exports: [components]
})
export class SharedModule { }
