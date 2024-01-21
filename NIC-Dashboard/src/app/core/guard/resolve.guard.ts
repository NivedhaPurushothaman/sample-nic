import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { UserListService } from 'src/app/services/user-list.service';

@Injectable({
  providedIn: 'root',
})
export class ResolveGuard implements Resolve<any> {
  constructor(private _userListService:UserListService){}
  resolve(){
     return this._userListService.userListData();
  }
  
}
