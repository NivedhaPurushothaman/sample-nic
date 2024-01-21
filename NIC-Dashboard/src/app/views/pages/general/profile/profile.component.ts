import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  storedUserData: any;
  registerFormData:any;
  profileData:any;
  constructor(private userDataService:UserDataService) { }

  ngOnInit(): void {

    this.storedUserData = localStorage.getItem('userEmail');
    this.registerFormData = JSON.parse(localStorage.getItem('registerFormData'));
    this.profileData = JSON.parse(localStorage.getItem('userData')).Data

    if (this.storedUserData) {
    }
  }

}
