import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addLecture(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.lecture.add}`, payload)
  }

  allLectures(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.lecture.retrieve}`);
  }

  editLecture(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.lecture.edit}/${id}`, payload);
  }

  deleteLecture(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.lecture.delete}/${id}`, payload);
  }
}
