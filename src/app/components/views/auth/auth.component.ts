import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }
  user: Partial<IUser> = {
    password: "",
    remember: true,
    email: ""
  }

  ngOnInit(): void {
  }
  login() {
    this.auth.login(this.user).subscribe((response) => {
      this.router.navigate([ApiRoutes.dashboard.home])
    })
  }
}
