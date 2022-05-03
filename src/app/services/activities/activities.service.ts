import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  
  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addActivity(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.activity.add}`, payload)
  }

  allActivities(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.activity.retrieve}`);
  }

  editActivity(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.activity.edit}/${id}`,payload);
  }

  deleteActivity(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.activity.delete}/${id}`);
  }

}
