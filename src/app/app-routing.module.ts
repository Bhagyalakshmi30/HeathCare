import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ContentComponent } from './content/content.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContentDetailsComponent } from './content/content-details/content-details.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { BookappComponent } from './bookapp/bookapp.component';
import { AdmindocComponent } from './admin/admindoc/admindoc.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'user', component:UserComponent},
  {path:'userhome', component:UserhomeComponent},
  {path:'admin', component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'admindoc/:email', component:AdmindocComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'content', component:ContentComponent ,canActivate:[AuthGuard], data:{roles:['Doctor']}},
  {path:'content/:email', component:ContentDetailsComponent},
  {path:'content-details/:email', component:BookappComponent},
 
  {path:'appointment', component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
