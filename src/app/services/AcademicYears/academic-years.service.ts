import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class AcademicYearsService {

  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addAcademicYear(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.academicYear.add}`, payload)
  }

  allAcademicYears(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.academicYear.retrieve}`);
  }

  editAcademicYear(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.academicYear.edit}/${id}`, payload);
  }

  deleteAcademicYear(id: string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.academicYear.delete}/${id}`);
  }

  setActiveAcademicYear(is_active: boolean, id: string) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.academicYear.setActiveYear}/${id}`, { is_active });
  }
}
