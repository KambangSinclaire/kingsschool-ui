import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  
  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addResource(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.resource.add}`, payload)
  }

  allResources(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.resource.retrieve}`);
  }

  editResource(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.resource.edit}/${id}`,payload);
  }

  deleteResource(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.resource.delete}/${id}`);
  }

}
