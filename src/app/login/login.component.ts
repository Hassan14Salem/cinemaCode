import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // take uEmail & pass 
  //========Login Form ========
loginForm=new FormGroup({
  email:new FormControl(null , [Validators.required]),
  password:new FormControl(null , Validators.required)
})
// check if success  >>> go to home
// ===============Login Method ======================
loginMethod(loginForm:FormGroup)
{
  this.loginFlag = true;
  this._AuthServiceService.login(loginForm.value).subscribe({
  
    next:(Response)=>{
      if ( Response.message == 'success'  ) {
//success 
this._Router.navigate(['/home'])
this.loginFlag = false;
 //store token in localstorage
 localStorage.setItem('userToken' , Response.token )
//Decode token
this._AuthServiceService.decodeToken()
console.log(this._AuthServiceService.userInfo)
      } 
      else
       {
        this.errorMessage = Response.message ; 
        this.loginFlag = false;

      }
     
      
     
    }
  })
}
//============= Error Var ============
errorMessage:string=''
// ============ Login FLAG ==================
loginFlag:boolean=false;
  constructor(private _AuthServiceService:AuthServiceService , private _Router:Router) { }

  ngOnInit(): void {
  }

}
