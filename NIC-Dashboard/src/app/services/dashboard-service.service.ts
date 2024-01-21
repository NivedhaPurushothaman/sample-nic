import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dashboardDataSubject = new BehaviorSubject<any>(null);
  dashboardData$ = this.dashboardDataSubject.asObservable();
  private devicesSubject = new BehaviorSubject<any>(null);
  devicesSubject$ = this.devicesSubject.asObservable();

  setDashboardData(data: any) {
    this.dashboardDataSubject.next(data);
  }

  setDevicesArray(data: any){
    this.devicesSubject.next(data);
  }
}






















