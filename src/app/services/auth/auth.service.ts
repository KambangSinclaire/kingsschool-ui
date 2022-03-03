import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = ApiRoutes.api.baseUrl;

  constructor(private http: HttpClient) { }

  login(payload:IUser) {
    return this.http.post(this.baseUrl, payload)
  }
}
