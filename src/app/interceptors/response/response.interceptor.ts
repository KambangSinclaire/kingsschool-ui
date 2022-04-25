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
import { Router } from '@angular/router';
import { ApiRoutes } from 'src/app/utils/routes/app.routes';
import { AppStateManager } from 'src/app/state/app.state';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private router: Router, private state: AppStateManager) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.state.setLoader(true);

    return next.handle(request).pipe(
      tap({
        next: (data) => {
          if (data instanceof HttpResponse) {
            let headings: string[] = [];
           if(!request.url.includes('file')){
            if(typeof data?.body?.data && data.body.data.length>0){
              for (let [key, value] of Object.entries(data.body.data[0])) {
                if(value !== null && value !== undefined && value !== ''){
                  if (key.includes('_')) {
                    key = key.replace('_', ' ')
                  }
                  headings.push(key);
                }
              }
              data.body.headings = headings;
            }
           }
            ReponseHandler(data, AlertStatus.SUCCESS);
            this.state.setLoader(false);
          }
        },
        error: (error) => {
          this.state.setLoader(false);
          if (error?.status == 401 && error?.error?.message.includes('is not authorized')) this.router.navigate([ApiRoutes.dashboard.login]);
          ReponseHandler(error, AlertStatus.ERROR)
        }
      }),
      finalize(() => {
        console.log("loading... in finally");
      })
    );
  }
}
