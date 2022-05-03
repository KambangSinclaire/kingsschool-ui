import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class AcademicLevelsService {

  
  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addAcademicLevel(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.academicLevel.add}`, payload)
  }

  allAcademicLevels(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.academicLevel.retrieve}`);
  }

  editAcademicLevel(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.academicLevel.edit}/${id}`,payload);
  }

  deleteAcademicLevel(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.academicLevel.delete}/${id}`);
  }

}
