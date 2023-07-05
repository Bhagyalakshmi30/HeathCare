import { Component } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { UserDTOModel } from '../register/model/userDTO.model';
import { registerModel } from '../register/register.component';

import { LoggedInUserModel } from '../register/model/loggedinuser.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   

  invalid_user:string=''

  register:registerModel
  userDTO:UserDTOModel
  loggedInUser:LoggedInUserModel
  

  constructor(private signupService : SignupService, private router : Router, private toastr : ToastrService ){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel();
    this.register= new registerModel();

  }
   // Method to check if the user is authenticated
  

 

  Login(){
    console.log(this.userDTO)
    this.signupService.userLogin(this.userDTO).subscribe(data=>{
      console.log(data)
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("patientEmail",this.loggedInUser.email);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
      this.toastr.success('Login Successful!');
      
      if (localStorage.getItem("role")=="Admin")
      {
        this.router.navigateByUrl('admin');
      }
      else if(localStorage.getItem("role")=="Doctor"){
        //this.router.navigateByUrl('homepage');
        this.router.navigateByUrl('content');
      }
      else{
        this.router.navigateByUrl('userhome');

      }
      

    },
    err=>{
      console.log(err)
      this.toastr.error(err.error)
      //alert("Invalid Username/password")
      this.invalid_user='Invalid Username/password'
    });
  }

  clearForm() 
  {
    // this.userDTO = {}; // Clear the userDTO object to reset the form fields
    this.userDTO.email="";
    this.userDTO.password="";
  }

  move(){
    this.router.navigateByUrl('register');
  }

  passwordVisible = false;

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  LogOut()
  {
    localStorage.removeItem("token" );
    localStorage.removeItem("UserID");
    localStorage.removeItem("role");
    console.log("logged out");
    this.toastr.success("Logged out !!");
    this.router.navigateByUrl('homepage');
  }

 
}
