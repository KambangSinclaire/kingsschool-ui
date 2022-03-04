import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { ReponseHandler } from 'src/app/utils/response-handler.utils';
import { AlertStatus } from 'src/app/utils/response-status.utils';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    return next.handle(request).pipe(
      tap({
        next: (data) => {
          if (data instanceof HttpResponse) {
            ReponseHandler(data, AlertStatus.SUCCESS);
          }
        },
        error: (error) => {
          ReponseHandler(error, AlertStatus.ERROR)
        }
      }),
      finalize(() => {
        console.log("Request has reached finally");
      })
    );
  }
}
