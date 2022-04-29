import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  private baseUrl = ApiRoutes.api.baseUrl;
  private routes = ApiRoutes.api;
  constructor(private http: HttpClient) { }

  addFee(payload: any) {
    return this.http.post<any>(`${this.baseUrl}${this.routes.fee.add}`, payload)
  }

  allFees(query: any) {
    return this.http.get<any>(`${this.baseUrl}${this.routes.classroom.retrieve}`);
  }

  editFee(id:string,payload: any) {
    return this.http.put<any>(`${this.baseUrl}${this.routes.fee.edit}/${id}`,payload);
  }

  deleteFee(id:string) {
    return this.http.delete<any>(`${this.baseUrl}${this.routes.fee.delete}/${id}`);
  }

}
