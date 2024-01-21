import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard-service.service';

@Component({
  selector: 'app-iot-device',
  templateUrl: './iot-device.component.html',
  styleUrls: ['./iot-device.component.scss']
})
export class IOTDeviceComponent implements OnInit {

  devices:any;
  tableColumns:any;
  constructor() { }

  ngOnInit(): void {
     this.tableColumns = ['Sl no.', 'Device id', 'Device Type', 'Location', 'Version', 'Status','Action'];

  
      this.devices = JSON.parse(localStorage.getItem('userData')).Data.device_details;
  }

  customTableData = [
    { Name: 'John Doe', Position: 'Developer', Office: 'City', Age: 30, 'Start date': '2022/01/22', Salary: '$100,000' },
    // ... other custom data ...
  ];
}
