import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

 
  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addTask(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.task.add}`, payload)
  }

  allTasks(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.task.retrieve}`);
  }

  editTask(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.task.edit}/${id}`,payload);
  }

  deleteTask(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.task.delete}/${id}`);
  }

}
