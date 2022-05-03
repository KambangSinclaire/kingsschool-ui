import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addSchool(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.school.add}`, payload)
  }

  allSchools(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.school.retrieve}`);
  }

  editSchool(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.school.edit}/${id}`, payload);
  }

  deleteSchool(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.school.delete}/${id}`, payload);
  }
}
