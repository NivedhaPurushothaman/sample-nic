import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private _HttpClient:HttpClient) { }

   registerPostData(value:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X' });
    let options = { headers: headers };
      return this._HttpClient.post('https://web.aclirea.com/aclirea-dashboard/v1.0/web-registration', value, options);
    } 

    verifyMobileotp(value:any){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X' });
      let options = { headers: headers };
        return this._HttpClient.post('https://web.aclirea.com/aclirea-dashboard/v1.0/verify-user', value, options);
  
  } 


  loginUserData(value:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X' });
     let options = { headers: headers };
      return this._HttpClient.post('https://web.aclirea.com/aclirea-dashboard/v1.0/web-authentication', value, options);
  } 


  reSendOtpData(value:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X' });
     let options = { headers: headers };
      return this._HttpClient.post('https://web.aclirea.com/aclirea-dashboard/v1.0/resend-otp', value, options);
  } 

  deviceData(deviceIds:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X' });
     let options = { headers: headers };
     let userAndDevice = {
      "email":localStorage.getItem("userEmail"),
    //  "email":"agarwal@rabyte.com",
      "deviceId" : deviceIds
     // "deviceId" : "DEL-1234566"
     }
      return this._HttpClient.post('https://web.aclirea.com/aclirea-dashboard/v1.0/requestforlive', userAndDevice, options);
  }

  userDeviceData(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X' });
     let options = { headers: headers };
     const email = 'agarwal@rabyte.com';
      const requestBody = {
        email: email
      };

      return this._HttpClient.post('https://web.aclirea.com/aclirea-dashboard/v1.0/user-display', requestBody, options);
  }


/**
  userDeviceData(){
      const email = 'agarwal@rabyte.com';
      const requestBody = {
        email: email
      };
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X'
        }),
        body: JSON.stringify(requestBody)
      };
      
      return this._HttpClient.get('https://web.aclirea.com/aclirea-dashboard/v1.0/user-display', httpOptions);

    } **/


}

 


