import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private baseUrl: string = ApiRoutes.api.baseUrl;
  constructor(private http: HttpClient) { }

  allClassrooms() {
    return this.http.get<any>(`${this.baseUrl}${ApiRoutes.api.classroom.retrieve}`);
  }

  getClassroom(id: string) {
    return this.http.get<any>(`${this.baseUrl}${ApiRoutes.api.classroom.retrieveSingle}/${id}`);
  }

  deleteClassroom(id: string) {
    return this.http.delete<any>(`${this.baseUrl}${ApiRoutes.api.classroom.delete}/${id}`);
  }

  updateClassroom(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${ApiRoutes.api.classroom.retrieveSingle}/${id}`, payload);
  }
}
