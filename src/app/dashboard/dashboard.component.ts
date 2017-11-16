import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  profiles : any;
  currentProfile : any;

  constructor() { 
    this.profiles = [
      {
        name : 'candidate1',
        location : 'location1',
        status : 'active',
        image : '../../assets/images/peepaltech.jpg',
        resume : '../../assets/resumes/RamiResume.pdf'
      },
      {
        name : 'candidate2',
        location : 'location2',
        status : 'inactive',
        image : '../../assets/images/peepaltech.jpg',
        resume : '../../assets/resumes/resume.pdf'
      }
    ]
    this.currentProfile = this.profiles[0];
  }

  ngOnInit() {
  }

  //sets current profile
  setCurrentProfile(profile){
    this.currentProfile = profile
  }

}
