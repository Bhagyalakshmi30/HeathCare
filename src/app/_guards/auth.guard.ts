import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, map } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { SignupService } from '../service/signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: SignupService, private toastr: ToastrService){

  }
  canActivate(): Observable<boolean> {
    return this.accountService.currentUser$.pipe(
      map(user =>{
        if(user) return true;
        else{
          this.toastr.error('You shall not passs!');
          return false;
        }
      })
    )
  }
  
}
