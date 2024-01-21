import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgxDatatableComponent } from './ngx-datatable/ngx-datatable.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ResolveGuard } from 'src/app/core/guard/resolve.guard';
import { UserDeviceComponent } from '../userDevice/user-device/user-device.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: 'details',
        component: BasicTableComponent,
        resolve:{
          data:ResolveGuard
        }
      },
      {
        path: 'data-table',
        component: DataTableComponent
      },
      {
        path: 'device',
        component: UserDeviceComponent
      },
      {
        path: 'ngx-datatable',
        component: NgxDatatableComponent
      }
    ]
  }
]

@NgModule({
  declarations: [TablesComponent, BasicTableComponent, DataTableComponent, NgxDatatableComponent, UserDeviceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class TablesModule { }
