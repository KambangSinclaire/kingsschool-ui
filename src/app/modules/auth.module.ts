import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../components/views/auth/auth.component';
import { AuthService } from '../services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
