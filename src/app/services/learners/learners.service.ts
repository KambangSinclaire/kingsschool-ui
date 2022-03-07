import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class LearnersService {
  

  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addLearner(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.learner.add}`, payload)
  }

  allLearners(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.learner.retrieve}`);
  }

  editLearner(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.learner.edit}/${id}`,payload);
  }

  deleteLearner(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.learner.delete}/${id}`,payload);
  }
}
