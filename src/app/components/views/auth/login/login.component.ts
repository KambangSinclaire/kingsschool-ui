import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cipher, LocalStore } from 'src/app/utils/localstore.utils';
import { Router } from '@angular/router';
import { IUser, UserRole } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppStateManager } from 'src/app/state/app.state';
import { MessageService } from 'primeng/api';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private state: AppStateManager
  ) { }


  user = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    remember: [""]
  });


  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user.value).subscribe((response) => {
      this.authActions(response)
    })
  }

  authActions(response: any) {
    const responseData: IUser = response.data;
    LocalStore.setItem('token', responseData.refresh_token);
    LocalStore.setItem('x_api_key', responseData.x_api_key);
    LocalStore.setItem('user', responseData);
    this.state.setUserState(responseData);

    if (responseData.userType.toUpperCase() === UserRole.staff.toUpperCase()) {
      this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.myOffice}`], {
        queryParams: {
          [responseData?.userType ?? UserRole.staff.toLowerCase()]: Cipher.encrypt(responseData?.id)
        }
      });
      return;
    }

    if (responseData.userType.toUpperCase() === UserRole.learner.toUpperCase()) {
      this.router.navigate([`${ApiRoutes.dashboard.home}/${ApiRoutes.dashboard.myClass}`], {
        queryParams: {
          [responseData?.userType ?? UserRole.learner.toLowerCase()]: Cipher.encrypt(responseData?.id)
        }
      });
      return;
    }

    this.router.navigate([ApiRoutes.dashboard.home], {
      queryParams: {
        [responseData?.userType ?? UserRole.admin.toLowerCase()]: Cipher.encrypt(responseData?.id)
      }
    });

    return;
  }
}
