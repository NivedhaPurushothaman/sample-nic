import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { offset } from '@popperjs/core';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss'],
  providers: [UserListService]
})
export class BasicTableComponent implements OnInit {
  allUser:any;
  loader:boolean = false;
  errorMessage:any;
  noDataFound:any;
  constructor(private _userListService:UserListService, private _activatedRougth:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.allUser = this._activatedRougth.snapshot.data['data'];
    //console.log(this.allUser);
    /**  this.loader = true;
    this._userListService.userListData().subscribe((response:any)=>{
      if(response){
        this.allUser = this.allUser.concat(response);
        this.loader = false;
      }else{
        this.noDataFound = "No data found";
      }
    },
    (error) => {
      if (error) {
        this.loader = false;
        this.errorMessage = error.message;
      }
      setTimeout(() => this.errorMessage = undefined, 15000);
    }
    ); **/
    

  }


}
