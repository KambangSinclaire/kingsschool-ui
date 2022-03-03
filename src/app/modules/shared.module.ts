import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../components/shared/alert/alert.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { HomeComponent } from '../components/shared/home/home.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, AlertComponent,
    NavbarComponent,SidebarComponent]
})
export class SharedModule { }
