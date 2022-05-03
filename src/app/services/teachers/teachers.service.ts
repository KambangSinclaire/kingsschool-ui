import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  
  constructor(private http: HttpClient) { }

  addTeacher(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.teacher.add}`, payload)
  }

  allTeachers(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.teacher.retrieve}`);
  }

  editTeacher(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.teacher.edit}/${id}`,payload);
  }

  deleteTeacher(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.teacher.delete}/${id}`);
  }

}
