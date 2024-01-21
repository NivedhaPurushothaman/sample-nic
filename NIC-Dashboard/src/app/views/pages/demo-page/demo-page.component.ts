import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {
  
  myForm: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;
  myForm4: FormGroup;
 
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
   @ViewChild('videopop') videopop: TemplateRef<any>;
   constructor(private calendar: NgbCalendar,private modalService: NgbModal) {
      
   }
   
  
   openXlModal(content: TemplateRef<any>) {
     this.modalService.open(content, {size: 'lg'}).result.then((result) => {
       this.basicModalCloseResult = "Modal closed" + result
     }).catch((res) => {});
   }

   openBasicModal(modalContent: TemplateRef<any>): void {
    this.modalService.open(modalContent, { centered: true, size: 'lg' })
      .result.then(
        (result) => {
          console.log("Modal closed", result);
        }
      )
      .catch((res) => {
        console.log("Modal dismissed", res);
      });
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
    this.currentName = [form.value.current1,form.value.current2,form.value.current3,form.value.current4,form.value.current5];
     this.timeName = [form.value.time1,form.value.time2,form.value.time3,form.value.time4,form.value.time5];
       this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName, this.timeName);   
 }
   
 onSubmit2(form: FormGroup) {
   this.currentName1 = [form.value.current11,form.value.current21,form.value.current31,form.value.current41,form.value.current51];
   this.timeName1 = [form.value.time11,form.value.time21,form.value.time31,form.value.time41,form.value.time51];
   this.revenueChartOptions2 = getRevenueChartOptions2(this.obj, this.currentName1, this.timeName1);  
 }
 onSubmit3(form: FormGroup) {
   this.currentName2 = [form.value.current12,form.value.current22,form.value.current32,form.value.current42,form.value.current52];
   this.timeName2 = [form.value.time12,form.value.time22,form.value.time32,form.value.time42,form.value.time52];
   this.revenueChartOptions3 = getRevenueChartOptions2(this.obj, this.currentName2, this.timeName2);   
 }
 onSubmit4(form: FormGroup) {
   this.currentName3 = [form.value.current13,form.value.current23,form.value.current33,form.value.current43,form.value.current53];
   this.timeName3 = [form.value.time13,form.value.time23,form.value.time33,form.value.time43,form.value.time53];
   this.revenueChartOptions4 = getRevenueChartOptions2(this.obj, this.currentName3, this.timeName3); 
 }

 ngAfterViewInit() {
  this.openBasicModal(this.videopop);
}
   ngOnInit(): void {
     this.currentDate = this.calendar.getToday();
     this.revenueChartOptions = getRevenueChartOptions(this.obj, this.currentName);
     this.revenueChartOptions2 = getRevenueChartOptions2(this.obj, this.currentName1);
     this.revenueChartOptions3 = getRevenueChartOptions3(this.obj, this.currentName2);
     this.revenueChartOptions4 = getRevenueChartOptions4(this.obj, this.currentName3);
     if (document.querySelector('html')?.getAttribute('dir') === 'rtl') {
       this.addRtlOptions();
     }
   this.myForm = new FormGroup({
       current1: new FormControl('4'),
       time1: new FormControl('16:08:19'),
       current2: new FormControl('4'),
       time2: new FormControl('16:21:43'),
       current3: new FormControl('4'),
       time3: new FormControl('16:08:19'),
       current4: new FormControl('4'),
       time4: new FormControl('16:38:29'),
       current5: new FormControl('4'),
       time5: new FormControl('16:45:30'),
     });	
     
   this.myForm2 = new FormGroup({
       current11: new FormControl('4'),
       time11: new FormControl('16:08:19'),
       current21: new FormControl('4'),
       time21: new FormControl('16:21:43'),
       current31: new FormControl('4'),
       time31: new FormControl('16:08:19'),
       current41: new FormControl('4'),
       time41: new FormControl('16:38:29'),
       current51: new FormControl('4'),
       time51: new FormControl('16:45:30'),
     });
   this.myForm3 = new FormGroup({
       current12: new FormControl('4'),
       time12: new FormControl('16:08:19'),
       current22: new FormControl('4'),
       time22: new FormControl('16:21:43'),
       current32: new FormControl('4'),
       time32: new FormControl('16:08:19'),
       current42: new FormControl('4'),
       time42: new FormControl('16:38:29'),
       current52: new FormControl('4'),
       time52: new FormControl('16:45:30'),
     });
   this.myForm4 = new FormGroup({
       current13: new FormControl('4'),
       time13: new FormControl('16:08:19'),
       current23: new FormControl('4'),
       time23: new FormControl('16:21:43'),
       current33: new FormControl('4'),
       time33: new FormControl('16:08:19'),
       current43: new FormControl('4'),
       time43: new FormControl('16:38:29'),
       current53: new FormControl('4'),
       time53: new FormControl('16:45:30'),
     });
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
 
 function getRevenueChartOptions(obj: any, cur:any = [4,6,3,6,2], time:any = ['16:08:19','16:21:43','16:08:19','16:38:29','16:45:30']) {
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
         text: 'Time (s)',
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
         text: 'Time (s)',
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
         text: 'Time (s)',
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
         text: 'Time (s)',
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

