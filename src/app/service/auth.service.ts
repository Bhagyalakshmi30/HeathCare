import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { JwtHelperService } from "@auth0/angular-jwt"; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private signupService:SignupService) { }

  isLoggedIn(){
    return !!this.getAccessToken() && !this.isTokenExpired();
  }

  getAccessToken(){
    return localStorage.getItem('token');
  }

  getUsername(){
    return localStorage.getItem('UserID');
  }

  isTokenExpired(){
    const token: string=this.getAccessToken()??"";
        if(!token)
          return false;
        return true;

  }

  logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.router.navigate(['/login']);
 }

 getUserRole(){
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(this.getAccessToken()??"");
  if(decodedToken){
  const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

  console.log(role);
  return role; 
  }
  return "";
}
}
