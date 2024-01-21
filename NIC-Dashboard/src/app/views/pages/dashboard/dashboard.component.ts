
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms' ;
import { DashboardService } from 'src/app/services/dashboard-service.service';
import { Calendar } from '@fullcalendar/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})

export class DashboardComponent implements OnInit {
	
 myForm: FormGroup;
 myForm2: FormGroup;
 myForm3: FormGroup;
 myForm4: FormGroup;
 tempArray: any;
 powerArray:any;
 voltageArray:any;
 humidArray:any;

  /**
   * Apex chart
   */
  public revenueChartOptions: any = {};
  public revenueChartOptions2: any = {};
  public revenueChartOptions3: any = {};
  public revenueChartOptions4: any = {};

  // colors and font variables for apex chart 
  obj = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#000",
    cardBg         : "#fff",
    fontFamily     : "'Roboto', Helvetica, sans-serif"
  }
  obj2 = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#000",
    cardBg         : "#fff",
    fontFamily     : "'Roboto', Helvetica, sans-serif"
  }

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;
  basicModalCloseResult: string = ''; 
  humidName: any[];
  powerName: any[];
  voltageName: any[];
  apiUrl: string;
  requestBody: { email: any; deviceId: any; };
  constructor(private router: Router,private calendar: NgbCalendar,private modalService: NgbModal,private dashboardService: DashboardService,private http:HttpClient) {
	   
  }
  
  openXlModal(content: TemplateRef<any>) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }
  
  currentName:any;
  timeName:any;
  currentName1:any;
  timeName1:any;
    currentName2:any;
  timeName2:any;
    currentName3:any;
  timeName3:any;
  onSubmit(form: FormGroup) {
  this.currentName = [
    form.value.current1,
    form.value.current2,
    form.value.current3,
    form.value.current4,
    form.value.current5
  ];

  this.timeName = [
    form.value.time1,
    form.value.time2,
    form.value.time3,
    form.value.time4,
    form.value.time5
  ];

  this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName, this.timeName);
}
  
onSubmit2(form: FormGroup) {
  this.currentName1 = [
    form.value.humidity1,
    form.value.humidity2,
    form.value.humidity3,
    form.value.humidity4,
    form.value.humidity5
  ];

  this.timeName = [
    form.value.time1,
    form.value.time2,
    form.value.time3,
    form.value.time4,
    form.value.time5
  ];

  this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName1, this.timeName);
}
onSubmit3(form: FormGroup) {  
  this.currentName2 = [
    form.value.power1,
    form.value.power2,
    form.value.power3,
    form.value.power4,
    form.value.power5
  ];

  this.timeName = [
    form.value.time1,
    form.value.time2,
    form.value.time3,
    form.value.time4,
    form.value.time5
  ];

  this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName2, this.timeName);
}
onSubmit4(form: FormGroup) {
  this.currentName3 = [
    form.value.humidity1,
    form.value.humidity2,
    form.value.humidity3,
    form.value.humidity4,
    form.value.humidity5
  ];

  this.timeName = [
    form.value.time1,
    form.value.time2,
    form.value.time3,
    form.value.time4,
    form.value.time5
  ];

  this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName3, this.timeName);
}

dummyData() {
  this.router.navigate(['/demo']);
}
  ngOnInit(): void {
    this.currentDate = this.calendar.getToday();
    this.apiUrl = 'https://web.aclirea.com/aclirea-dashboard/v1.0/dashboard-data';

    if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
      this.addRtlOptions();
    }
      const headers = new HttpHeaders({
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9',
        // 'sec-fetch-dest': 'empty',
        // 'sec-fetch-mode': 'cors',
        // 'sec-fetch-site': 'cross-site',
        'x-api-key' : 'H9ET9IaiVV70vxYlK7zhA5snoOp6iM5I9jG6Ye8X'
      });
      this.requestBody = {
        email: (JSON.parse(localStorage.getItem('userData')).Data.email),
        deviceId: (JSON.parse(localStorage.getItem('userData'))?.Data?.device_details[0]?.deviceId) || ''
      };
      this.http.post<any>(this.apiUrl, this.requestBody, { headers }).subscribe(
        (dashboardData) => {
          if (dashboardData) {
            // Use the dashboard data in your component
            const data = dashboardData.Data;
            const formControls: any = {};
    
            // Define the number of controls you want (in this case, 5)
            const numberOfControls = 10;
    
            // Loop through the data and create form controls dynamically
            for (let i = 0; i < Math.min(data.length, numberOfControls); i++) {
              const currentKey = `current${i + 1}`;
              const timeKey = `time${i + 1}`;
              const humidKey = `humidity${i + 1}`;
              const powerKey = `power${i + 1}`;
              const voltageKey = `voltage${i + 1}`;
    
              // Create form controls for current, time, humidity, power, and voltage
              formControls[currentKey] = new FormControl(data[i].temp);
              formControls[timeKey] = new FormControl(data[i].TimeStamp ? data[i].TimeStamp.split(' ')[1] : '');
              formControls[humidKey] = new FormControl(data[i].humidity);
              formControls[powerKey] = new FormControl(data[i].Power);
              formControls[voltageKey] = new FormControl(data[i].voltage);
    
    
            }
    
            // Create the FormGroup with the dynamically generated controls
            this.myForm = new FormGroup(formControls);
            this.myForm2 = new FormGroup(formControls);
            this.myForm3 = new FormGroup(formControls);
            this.myForm4 = new FormGroup(formControls);
    
            // Use the form values to set up the initial state of the chart
            this.currentName = Object.keys(this.myForm.controls).filter(key => key.startsWith('current')).map(key => this.myForm.get(key)?.value);
            this.timeName = Object.keys(this.myForm.controls).filter(key => key.startsWith('time')).map(key => this.myForm.get(key)?.value);
            this.humidName = Object.keys(this.myForm.controls).filter(key => key.startsWith('humidity')).map(key => this.myForm.get(key)?.value);        
            this.powerName = Object.keys(this.myForm.controls).filter(key => key.startsWith('power')).map(key => this.myForm.get(key)?.value);        
            this.voltageName = Object.keys(this.myForm.controls).filter(key => key.startsWith('voltage')).map(key => this.myForm.get(key)?.value);     
    
            this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName, this.timeName);
            this.revenueChartOptions2 = getRevenueChartOptions2(this.obj, this.powerName, this.timeName);
            this.revenueChartOptions3 = getRevenueChartOptions3(this.obj, this.voltageName, this.timeName);
            this.revenueChartOptions4 = getRevenueChartOptions4(this.obj, this.humidName, this.timeName);
          }
          
        },
        (dashboardError) => {
          // Handle errors from the dashboard API call
        }
      );      
      
    // })
  }


  /**
   * Only for RTL (feel free to remove if you are using LTR)
   */
  addRtlOptions() {
    // Revenue chart
    this.revenueChartOptions.yaxis.labels.offsetX = -25;
    this.revenueChartOptions.yaxis.title.offsetX = -75;
	
	this.revenueChartOptions2.yaxis.labels.offsetX = -25;
    this.revenueChartOptions2.yaxis.title.offsetX = -75;
	
	this.revenueChartOptions3.yaxis.labels.offsetX = -25;
    this.revenueChartOptions3.yaxis.title.offsetX = -75;
	
	this.revenueChartOptions4.yaxis.labels.offsetX = -25;
    this.revenueChartOptions4.yaxis.title.offsetX = -75;
  }
  



}

const currentDate = new Date();


function getRevenueChartOptions(obj: any, cur:any = [4,6,3,6,2] , time:any = ['16:08:19','16:21:43','16:08:19','16:38:29','16:45:30']) {
  return {
    series: [{
      name: "TEMPERATURE",
	    //data:[4,6,3,6,2],
      data: cur
    }],
    chart: {
      type: "line",
      height: '300',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.primary, obj.danger, obj.warning],
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "Voltage",
      //categories: [1,2,3,4,5],
      categories: time,
	  title: {
        text: `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`,
        style:{
          size: 1,
          color: obj.muted
        }
      },
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
    },
    yaxis: {
      title: {
        text: 'TEMPERATURE',
        style:{
          size: 9,
          color: obj.muted
        }
      },
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
      labels: {
        offsetX: 0,
      },
    },
    markers: {
      size: 0,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  }
};

function getRevenueChartOptions2(obj: any, cur1:any = [4,6,1,6,3], time1:any = ['16:08:19','16:21:43','16:08:19','16:38:29','16:45:30']) {
  return {
    series: [{
      name: "POWER",
	    //data:[4,6,3,6,2],
      data: cur1
    }],
    chart: {
      type: "line",
      height: '300',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.danger, obj.primary, obj.warning],
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "Voltage",
      //categories: [1,2,3,4,5],
      categories: time1,
	  title: {
        text: `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`,
        style:{
          size: 1,
          color: obj.muted
        }
      },
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
    },
    yaxis: {
      title: {
        text: 'POWER',
        style:{
          size: 9,
          color: obj.muted
        }
      },
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
      labels: {
        offsetX: 0,
      },
    },
    markers: {
      size: 0,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  }
};


function getRevenueChartOptions3(obj: any, cur2:any = [4,6,7,6,3], time2:any = ['16:08:19','16:21:43','16:08:19','16:38:29','16:45:30']) {
  return {
    series: [{
      name: "VOLTAGE",
	    //data:[4,6,3,6,2],
      data: cur2
    }],
    chart: {
      type: "line",
      height: '300',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.warning, obj.primary, obj.danger],
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "Voltage",
      //categories: [1,2,3,4,5],
      categories: time2,
	  title: {
        text: `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`,
        style:{
          size: 1,
          color: obj.muted
        }
      },
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
    },
    yaxis: {
      title: {
        text: 'VOLTAGE',
        style:{
          size: 9,
          color: obj.muted
        }
      },
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
      labels: {
        offsetX: 0,
      },
    },
    markers: {
      size: 0,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  }
};



function getRevenueChartOptions4(obj: any, cur3:any = [4,6,7,3,2], time3:any = ['16:08:19','16:21:43','16:08:19','16:38:29','16:45:30']) {
  return {
    series: [{
      name: "HUMIDITY",
	    //data:[4,6,3,6,2],
      data: cur3
    }],
    chart: {
      type: "line",
      height: '300',
      parentHeightOffset: 0,
      foreColor: obj.bodyColor,
      background: obj.cardBg,
      toolbar: {
        show: false
      },
    },
    colors: [obj.info, obj.primary, obj.danger],
    grid: {
      padding: {
        bottom: -4,
      },
      borderColor: obj.gridBorder,
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      type: "Voltage",
      //categories: [1,2,3,4,5],
      categories: time3,
	  title: {
        text: `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`,
        style:{
          size: 1,
          color: obj.muted
        }
      },
      lines: {
        show: true
      },
      axisBorder: {
        color: obj.gridBorder,
      },
      axisTicks: {
        color: obj.gridBorder,
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
    },
    yaxis: {
      title: {
        text: 'HUMIDITY',
        style:{
          size: 9,
          color: obj.muted
        }
      },
      tickAmount: 4,
      tooltip: {
        enabled: true
      },
      crosshairs: {
        stroke: {
          color: obj.secondary,
        },
      },
      labels: {
        offsetX: 0,
      },
    },
    markers: {
      size: 0,
    },
    stroke: {
      width: 2,
      curve: "straight",
    },
  }
};