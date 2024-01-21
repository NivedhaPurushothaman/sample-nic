import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  loader:boolean = false;
  domainName:string = null;
  userForm: FormGroup;
  userData: any;

  constructor(private router: Router,private fb: FormBuilder,private userDataService : UserDataService) { }
	 retrievedValue: string;
  ngOnInit(): void {
	if (localStorage.getItem('isLoggedin') == null) {
      this.router.navigate(['/dashboard']);
    }
	 // Initialize your form with default values or empty values
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: [localStorage.getItem('userEmail'), [Validators.required, Validators.email]],
      mobile_number: ['', Validators.required],
      company_name: ['', Validators.required],

    });

    // Retrieve data from localStorage
    const userDataString = localStorage.getItem('registerFormData');
    this.userData = JSON.parse(localStorage.getItem('userData'))
    this.userData = this.userData.Data
    if (userDataString) {
      // Parse the JSON string from localStorage into an object
      const registerFormData = JSON.parse(userDataString);
      // Set the form values with the retrieved data
      this.userForm.patchValue(registerFormData);
    }else if (this.userData){
      // const registerFormData = JSON.parse(this.userData)
      this.userForm.patchValue({
        name: this.userData.name,
        mobile_number: this.userData.mobile_number,
        email:this.userData.email,
      });
    }
  }
  


  getInputEmail(e){
    var str = e.target.value;
    var n = str.lastIndexOf('@');
    if(n > 0){
      this.domainName = str.substring(n + 1);
    }
    
  
  }

  userDetails(){
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/dashboard']);
      //this.router.navigate(['/auth/userDetails']);
    }
  }

}
