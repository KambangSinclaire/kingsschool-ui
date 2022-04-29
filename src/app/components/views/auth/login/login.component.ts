import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cipher, LocalStore } from 'src/app/utils/localstore.utils';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
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
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: response?.message });
    }, (error) => {
      // this.messageService.add({ severity: 'error', summary: 'Error', detail: error?.error?.message ?? error?.message  ?? "An error occured"});
      // this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${this.options.plural} deleted`, life: 3000 });
    }
    )
  }

  authActions(response: any) {
    const responseData: IUser = response.data;
    LocalStore.setItem('token', responseData.refresh_token);
    LocalStore.setItem('x_api_key', responseData.x_api_key);
    LocalStore.setItem('user', responseData);
    this.state.setUserState(responseData);
    this.router.navigate([ApiRoutes.dashboard.home], {
      queryParams: {
        [responseData?.userType ?? "admin"]: Cipher.encrypt(responseData?.id)
      }
    });
  }
}
