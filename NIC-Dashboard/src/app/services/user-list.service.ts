import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _HttpClient: HttpClient) { }
  
  userListData() {
    let value = {
      "email": "ashish@rabyte.com",
      "password": "Rabyte@1234"
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X'
    });
    let options = { headers: headers };
    const url = `https://web.aclirea.com/aclirea-dashboard/v1.0/users-list`;
    return this._HttpClient.post(url, value, options);
  }

}
