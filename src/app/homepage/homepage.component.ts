import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../service/scroll.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { UserDTOModel } from '../register/model/userDTO.model';
import { SignupService } from '../service/signup.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent 
{
  currentUser$: Observable<UserDTOModel | null> =of(null)
  
  constructor(private router:Router, private scrollService: ScrollService , private toastr : ToastrService,public  signupservice:SignupService)
  {
   
  }

  scrollToId(id: string) {
    console.log("element id : ", id);
    this.scrollService.scrollToElementById(id);
  }

  scrollToElement(element: HTMLElement) {
    this.scrollService.scrollToElement(element);
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

  loginPage()
  {
    this.router.navigateByUrl('login');
  }
  

}
