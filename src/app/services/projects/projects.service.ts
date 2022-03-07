import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

 
  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addProject(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.project.add}`, payload)
  }

  allProjects(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.project.retrieve}`);
  }

  editProject(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.project.edit}/${id}`,payload);
  }

  deleteProject(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.project.delete}/${id}`);
  }

}
