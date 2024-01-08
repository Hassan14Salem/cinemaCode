import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // formGroup to take user's info
  // ============ register Form =======================
registerForm=new FormGroup({
  first_name:new FormControl(null , [Validators.required , Validators.maxLength(10), Validators.minLength(3)] ),
  last_name:new FormControl(null , [Validators.required , Validators.maxLength(10), Validators.minLength(3)] ),
  age:new FormControl(null , [  Validators.required ,Validators.min(18) , Validators.max(60), Validators.pattern('[0-9]{1,}')]  ),
  email:new FormControl(null ,[Validators.required , Validators.email] ),
 password:new FormControl(null , [Validators.required] )
})
// ===========================
  constructor(private _AuthServiceService:AuthServiceService , private _Router:Router) { }
  // ============ Register FLAG ===============
  registerFlag:boolean=false;
//====== ERROR VAR ====
  errorMessage:string=''
  // =============== Register Method ===========================
  // check if user's data succes and take user to login .. 

registerMethod(registerForm:FormGroup)
{
  this.registerFlag=true;
  this._AuthServiceService.register(registerForm.value).subscribe({
    next:(Response)=>{
      if (  Response.message == 'success' ) {
        this.registerFlag=false;
this._Router.navigate(['/login'])
      } else {
        this.errorMessage = Response.errors.email.message
        this.registerFlag=false;

      }
    }
  })
}
  ngOnInit(): void {
  }

}
