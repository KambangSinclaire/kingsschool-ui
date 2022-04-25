import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string = ApiRoutes.api.baseUrl;
  constructor(private http: HttpClient) { }

  addCourse(payload:any){
    return this.http.post<any>(`${this.baseUrl}${ApiRoutes.api.course.add}`,payload)
  }

  allcourses() {
    return this.http.get<any>(`${this.baseUrl}${ApiRoutes.api.course.retrieve}`);
  }

  getCourse(id: string) {
    return this.http.get<any>(`${this.baseUrl}${ApiRoutes.api.course.retrieveSingle}/${id}`);
  }

  deleteCourse(id: string) {
    return this.http.delete<any>(`${this.baseUrl}${ApiRoutes.api.course.delete}/${id}`);
  }

  updateCourse(id: string, payload: any) {
    return this.http.put<any>(`${this.baseUrl}${ApiRoutes.api.course.edit}/${id}`, payload);
  }
}
