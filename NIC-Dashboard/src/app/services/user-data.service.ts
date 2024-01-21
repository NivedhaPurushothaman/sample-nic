import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
    // private userData: { name?: string; email?: string; company_name?: string; mobile_number?: string } = {};
  
    // setUserData(data: { name?: string; email?: string; company_name?: string; mobile_number?: string }): void {
    //   this.userData = data;
    // }
  
    // getUserData(): { name?: string; email?: string; company_name?: string; mobile_number?: string } {
    //   console.log(this.userData);
    //   return this.userData;
    // }
    private userDataSubject = new BehaviorSubject<any>(null);
    userData$ = this.userDataSubject.asObservable();
  
    setUserData(data: any): void {
        this.userDataSubject.next(data);
      }
    
      getUserData(): any {
        return this.userDataSubject.value;
      }
  }
