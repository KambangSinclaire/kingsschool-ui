import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user.interface';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;

  constructor(private http: HttpClient) { }

  login(payload:IUser) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.user.login}`, payload)
  }

  createAccount(payload:IUser) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.user.add}`, payload)
  }

  editProfile(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.user.edit}/${id}`, payload);
  }
}
