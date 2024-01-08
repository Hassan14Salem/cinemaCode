import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { UInfo } from './u-info';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  // ************** summary of service *********///
  // this Service is used to check Authentication 
  // used in register and login Components 
  // also there is a method here just for decode the token

  // *******************************************///

// on refresh

  constructor(private _HttpClient: HttpClient , private _Router:Router) {
    if (   localStorage.getItem('userToken') != null    ){
      this.decodeToken()
  this._Router.navigate([`${localStorage.getItem('currentPage')}`])
    }
   }
  // ================== Register Method ===========================
  register(registerVal: UInfo): Observable<any> {
    return this._HttpClient.post('https://localhost:7052/api/Auth/register', registerVal)
  }
  // ================== Login Method ===========================

  login(loginVal: UInfo): Observable<any> {
    return this._HttpClient.post('https://localhost:7052/api/Auth/login', loginVal)
  }
  // ================== Decode Token Method ===========================
  userInfo = new BehaviorSubject(null)
  decodeToken() {
    return this.userInfo.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken'))));

  }
}
