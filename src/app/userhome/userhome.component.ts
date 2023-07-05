import { Component } from '@angular/core';
import { UserDTOModel } from '../register/model/userDTO.model';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent  {


  constructor(private toastr : ToastrService ,private router : Router){

  }

  user=localStorage.getItem("UserID");
 ;


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
