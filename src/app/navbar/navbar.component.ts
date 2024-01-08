import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
// ===== hide navbar options =====
checkFlag:boolean=false;
// ============Log Out Method ===============
logOut()
{
  // userInfo = null 
  //remove localstorage (token)
   //remove localstorage (current page)
  // router to log in 
this._Router.navigate(['/login'])
localStorage.removeItem('userToken') 
this._AuthServiceService.userInfo.next(null)

 
}
  constructor(private _AuthServiceService:AuthServiceService ,private _Router:Router) { }

  ngOnInit(): void {
   this._AuthServiceService.userInfo.subscribe(()=>{
    if ( this._AuthServiceService.userInfo.getValue() != null   ){
      this.checkFlag = true; 
    } else
    {
      this.checkFlag = false; 
    }
   })
  }

}
