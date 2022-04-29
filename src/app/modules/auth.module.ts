import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../components/views/auth/auth.component';
import { AuthService } from '../services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared.module';
import { ProfileComponent } from '../components/views/auth/profile/profile.component';
import { LoginComponent } from '../components/views/auth/login/login.component';
import { SignupComponent } from '../components/views/auth/signup/signup.component';
import { PrimengModule } from './primeng.module';


const components = [
  ProfileComponent,
  AuthComponent,
  LoginComponent,
   SignupComponent
]
@NgModule({
  declarations: [
   components,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule
  ],
exports:[ components],
  providers:[AuthService]
})
export class AuthModule { }
