import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterServiceService } from 'src/app/services/register-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  returnUrl: any;
  addLoginMsg:any = null;
  loader:boolean = false
  errorMessage: string | undefined;
  adminForm:any =  new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private route: ActivatedRoute, private _registerServiceService:RegisterServiceService) { }

  ngOnInit(): void {
    //get return url from route parameters or default to '/'
   //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  AdminUser(){
    this.loader = true;
    if(this.adminForm.value.email === 'ashish@rabyte.com' && this.adminForm.value.password === 'Rabyte@1234'){
      localStorage.setItem('isAdmin', 'true');
      this.router.navigate(['/userList/details']);
    }else{
      this.loader = false;
       this.errorMessage = "Admin credential not correct !!! ";
    }
  }

}
