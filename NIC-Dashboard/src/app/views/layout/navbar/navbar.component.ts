import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2, TemplateRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  basicModalCloseResult: string = '';
  adminLoginCheck:boolean = false;
  userDeviceResponse:string = '';
  userName :any;
  userEmail :any;

  constructor( private modalService: NgbModal,
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private router: Router, private _registerServiceService:RegisterServiceService

    
  ) { }

  openBasicModal(content: TemplateRef<any>) {
    this.modalService.open(content, {}).result.then((result) => {
      this.basicModalCloseResult = "Modal closed" + result
    }).catch((res) => {});
  }

  userDeviceDetails(userDeviceid:any){
       this._registerServiceService.deviceData(userDeviceid).subscribe(
         (response) => {
           console.log(response);
           /**if (localStorage.getItem('isLoggedin')) {
             this.router.navigate(['/auth/userDetails']);
           }**/
   
         },
         (error) => {
           if(error){
            console.log(error);
           }
          //setTimeout(()=> this.errorMessage = undefined,5000);
         }
       );



  }

  ngOnInit(): void {
    if (localStorage.getItem('isAdmin')) {
       this.adminLoginCheck = true;
    }
    this.userName =JSON.parse(localStorage.getItem('userData')).Data.name
    this.userEmail = JSON.parse(localStorage.getItem('userData')).Data.email
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');
    localStorage.removeItem('registerFormData');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('userEmail');
    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }

}
