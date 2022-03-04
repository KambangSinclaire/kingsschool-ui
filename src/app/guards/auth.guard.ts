import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStore } from '../utils/localstore.utils';
import { ApiRoutes } from '../utils/routes/app.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = LocalStore.getItem('token','');
    const x_api_key = LocalStore.getItem('x_api_key','')

    if (token && x_api_key || route.routeConfig?.path === ApiRoutes.dashboard.home) {
      return true
    }
    return false;
  }

}
