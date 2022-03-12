import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';

@Injectable()
export class FileUploadInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes(ApiRoutes.api.fileUpload.single)) {
      const clonedRequest = request.clone();
      clonedRequest.headers.append("content-type", "application/json");
      request = clonedRequest;
    }
    return next.handle(request);
  }
}
