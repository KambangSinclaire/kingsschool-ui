import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private baseUrl: string = ApiRoutes.api.baseUrl;

  constructor(private http: HttpClient) { }

  getAllStatistics() {
    return this.http.get<any>(`${this.baseUrl}${ApiRoutes.api.statistics.all}`);
  }
}
