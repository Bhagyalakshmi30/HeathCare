import { Component, OnInit } from '@angular/core';
import { SignupService } from '../service/signup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:SignupService, private router:Router ,private toastr : ToastrService){}

  ngOnInit(): void {
    this.getDoctors();
   }

   public doctors: any;
  
  getDoctors()
  {
    this.service.getDoctorData().subscribe(result=>{
      this.doctors = result;
    })    
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
