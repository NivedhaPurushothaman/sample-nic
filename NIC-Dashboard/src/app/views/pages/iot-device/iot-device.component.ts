import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'app-iot-device',
  templateUrl: './iot-device.component.html',
  styleUrls: ['./iot-device.component.scss']
})
export class IOTDeviceComponent implements OnInit {

  devices:any;

  constructor() { }

  ngOnInit(): void {
      this.devices = JSON.parse(localStorage.getItem('userData')).Data.device_details;
  }

}
