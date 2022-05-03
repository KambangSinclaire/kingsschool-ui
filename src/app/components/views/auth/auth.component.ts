import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Cipher, LocalStore } from 'src/app/utils/localstore.utils';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppStateManager } from 'src/app/state/app.state';
import { FileHandler } from 'src/app/utils/file-handler.utils';
import { SchoolService } from 'src/app/services/school/school.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
   
  ) { }

  ngOnInit(): void {
  } 
}
