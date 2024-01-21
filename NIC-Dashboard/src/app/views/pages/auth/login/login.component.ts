import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { DashboardService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [RegisterServiceService]
})
export class LoginComponent implements OnInit {
  returnUrl: any;
  addLoginMsg:any = null;
  loader:boolean = false;
  deviceId:any;
  devices: any;

  errorMessage: string | undefined;
  loginForm:any =  new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  private _HttpClient: any;
  currentUrl: string;

  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute, private _registerServiceService:RegisterServiceService,private userDataService:UserDataService,private dashboardService: DashboardService) { }

  ngOnInit(): void {
    //get return url from route parameters or default to '/'
   //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   this.currentUrl = this.router.url;
  }


  loginUser(){

    // this.loader = true;
    if (this.currentUrl.includes('admin/login')) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X'
      });
      let options = { headers: headers };

      this.http.post('https://web.aclirea.com/aclirea/v1.0/adminauthentication', this.loginForm.value, options)
        .subscribe(
          (response) => {
            this.loader = false;
            if (response){
            const users = (response as any).Data as any[];
            const matchingUser = users.find(user => user.email === this.loginForm.value.email);
            if (matchingUser) {
              this.deviceId = matchingUser?.Data?.device_details?.[0]?.deviceId ?? '';
              this.devices = matchingUser?.Data?.device_details;
            this.dashboardService.setDevicesArray(this.devices);
            this.userDataService.setUserData((matchingUser)?.Data);
              localStorage.setItem('isLoggedin', 'true');
              localStorage.setItem('isAdmin', 'true');
            
              if (localStorage.getItem('isLoggedin')) {
                this.router.navigate(['/userList/details']);
              }            
            } else {
              this.loader = false;
            }
          }
          },
          (error) => {
            console.error(error);
          }
        );

    } else {
      this._registerServiceService.loginUserData(this.loginForm.value).subscribe(
        (response) => {
          if(response){
            console.log(response)
            this.deviceId = (response as any)?.Data[0]?.deviceId || '';
            
            this.devices = (response as any)?.Data.device_details;
            this.dashboardService.setDevicesArray(this.devices);
            this.userDataService.setUserData((response as any)?.Data);
            this.addLoginMsg = response;
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('userData', JSON.stringify(response));
          this.loader = false;
          const registrationData = this.userDataService.getUserData();
          if (localStorage.getItem('isLoggedin')) {
            this.router.navigate(['/auth/userDetails']);
          }
          }
        },
        (error) => {
          if(error){
            this.errorMessage = error.error.Message;
            this.loader = false;
          }
        }
      );
      }
  }



}
