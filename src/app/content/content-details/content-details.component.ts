import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Doctor } from 'src/app/register/model/doctormodel';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {

  doctor : Doctor | undefined;
  galleryOptions : NgxGalleryOptions[]=[];
  galleryImages : NgxGalleryImage[]=[];


  constructor(private signupService: SignupService ,private route : ActivatedRoute ,private router: Router){

  }
  ngOnInit(): void {
    this.loadDoctors();
    console.log("content details");
   
    this.galleryOptions=[
      {
        width: '500px',
        height : '500px',
        imagePercent : 100,
        thumbnailsColumns : 4,
        imageAnimation : NgxGalleryAnimation.Slide,
        preview:false
      }
    ]

    this.galleryImages = this.getImages();




  }

  

  loadDoctors() {
  var email = this.route.snapshot.paramMap.get('email');
  if(!email) return
    this.signupService.getMember(email).subscribe({
      next : doctor => this.doctor = doctor
    })
  }

  LogOut()
  {
    this.router.navigateByUrl('homepage');
  }

  getImages(){
    if(!this.doctor) return [];
    const imageUrls =[];
    for(const photo of this.doctor.photos)
    {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url
      })
    }
    return imageUrls;

  }


}
