import { Component, OnInit } from '@angular/core';
import { Doctor } from '../register/model/doctormodel';
import { SignupService } from '../service/signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookapp',
  templateUrl: './bookapp.component.html',
  styleUrls: ['./bookapp.component.css']
})
export class BookappComponent implements OnInit {
  doctor : Doctor | undefined;
  public users:any;
  public bookappointment! :FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:SignupService,private http:HttpClient, private router:Router,private toastr : ToastrService ,private route : ActivatedRoute){ 
    this.bookappointment = this.formBuilder.group({
      patientName: ['', Validators.required],
      patientEmail: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      problem: ['', Validators.required],
      slot: ['', Validators.required]
    });
   }
   docemail!:any;
   userEmail!:any;
  ngOnInit(): void {
    const userEmail = localStorage.getItem('patientEmail');
    const userName = localStorage.getItem('UserID');
    this.bookappointment = this.formBuilder.group({
     
      patientName: [userName],
      patientEmail: [userEmail],
      age: [],
      gender: [],
      slot: [],
      problem: [],
      doctorsEmail: [],
   } );

   

   this.docemail=this.route.snapshot.paramMap.get('email');
   this.bookappointment.get('doctorsEmail')?.setValue(this.docemail);

  
}
   
  
  
  public AddNewUser(): void
  {
    this.authService.postAppointment (this.bookappointment.value)
    .subscribe(result =>{
     console.log( "Your account created successfully. Now you can go and book your tickets.");
     this.toastr.success("APPOINTMENT BOOKED");
    },
    error => {
      console.log("An error occurred while submitting the form: ", error);
      // Handle the error here
    });
  }
}


 







  

  

































 

  
 

 

