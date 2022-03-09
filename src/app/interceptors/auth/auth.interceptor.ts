import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStore } from 'src/app/utils/localstore.utils';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!request.url.includes(ApiRoutes.api.user.login)) {
      const token = LocalStore.getItem('token', '');
      const x_api_key = LocalStore.getItem('x_api_key', '')
      let headers = new HttpHeaders({
        "authorization": `Bearer ${token}` ?? "",
        "x-api-key": x_api_key ?? ""
      });

      if (!request.url.includes(ApiRoutes.api.fileUpload)) {
        headers.append('Content-Type', 'application/json')
      }

      request = request.clone({ headers })
    }
    return next.handle(request);
  }
}
