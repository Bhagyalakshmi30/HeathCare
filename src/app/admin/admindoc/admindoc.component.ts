import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-admindoc',
  templateUrl: './admindoc.component.html',
  styleUrls: ['./admindoc.component.css']
})
export class AdmindocComponent implements OnInit{
  appointments: any[];
  doctorEmail: string;

  constructor(private route: ActivatedRoute, private appointmentService: SignupService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.doctorEmail = params.get('email');
      this.getAppointmentsByDoctorEmail(this.doctorEmail);
    });
  }

  getAppointmentsByDoctorEmail(doctorEmail: string) {
    this.appointmentService.getAppointmentsByDoctorEmail(doctorEmail)
      .subscribe((appointments: any[]) => {
        this.appointments = appointments;
      });
  }

  
 

}
