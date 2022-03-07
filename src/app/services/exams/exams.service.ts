import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  
  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addExam(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.exam.add}`, payload)
  }

  allExams(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.exam.retrieve}`);
  }

  editExam(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.exam.edit}/${id}`,payload);
  }

  deletEexam(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.exam.delete}/${id}`);
  }

}
