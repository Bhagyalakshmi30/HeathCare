import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { SignupService } from '../service/signup.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private signupservice : SignupService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.signupservice.currentUser$.pipe().subscribe({
      next:user =>{
        if(user){
          request=request.clone({
            setHeaders:{
              Authorization : `Bearer ${user.token}`
            }
          })
        }
      }
     })
    return next.handle(request);
  }
}
