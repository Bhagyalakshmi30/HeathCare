import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupService } from './service/signup.service';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContentDetailsComponent } from './content/content-details/content-details.component';
import {TabsModule} from 'ngx-bootstrap/tabs'
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { UserhomeComponent } from './userhome/userhome.component';
import { BookappComponent } from './bookapp/bookapp.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AdmindocComponent } from './admin/admindoc/admindoc.component';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    UserComponent,
    AdminComponent,
    ContentComponent,
    AppointmentComponent,
    ContentDetailsComponent,
    UserhomeComponent,
    BookappComponent,
    AdmindocComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    } ),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDatepickerModule
  ],
  providers: [SignupService,
    { provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
