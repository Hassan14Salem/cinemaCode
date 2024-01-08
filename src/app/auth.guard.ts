import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
}) 

export class AuthGuard implements CanActivate {
  constructor(private _AuthServiceService:AuthServiceService , private _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( this._AuthServiceService.userInfo.getValue() != null   ){
        return true;

      } else
      {
this._Router.navigate(['/login'])
        return false;
      }
  }
  
}
