import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { LocalStore } from 'src/app/utils/localstore.utils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder, private shared: SharedService) { }
  user = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    remember: [""]
  })

  ngOnInit(): void {
  }
  login() {
    this.auth.login(this.user.value).subscribe((response) => {
      LocalStore.setItem('token', response.data.refresh_token);
      LocalStore.setItem('x_api_key', response.data.x_api_key)
      this.router.navigate([ApiRoutes.dashboard.home]);
    }
    )
  }
}
