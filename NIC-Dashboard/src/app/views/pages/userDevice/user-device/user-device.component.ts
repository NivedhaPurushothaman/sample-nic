import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from 'src/app/services/register-service.service';


@Component({
  selector: 'app-user-device',
  templateUrl: './user-device.component.html',
  styleUrls: ['./user-device.component.scss']
})
export class UserDeviceComponent implements OnInit {

  constructor(private _registerServiceService:RegisterServiceService) { }

  ngOnInit(): void {
     this._registerServiceService.userDeviceData().subscribe((userDevice)=>{
       console.log(userDevice);
     })
  }

}
