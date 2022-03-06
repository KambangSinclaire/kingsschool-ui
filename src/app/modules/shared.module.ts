import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../components/shared/alert/alert.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { HomeComponent } from '../components/shared/home/home.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { CalendarComponent } from '../components/shared/calendar/calendar.component';
import { MessageInboxComponent } from '../components/shared/message-inbox/message-inbox.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    CalendarComponent,
    MessageInboxComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [HomeComponent, AlertComponent,
    NavbarComponent,SidebarComponent]
})
export class SharedModule { }
