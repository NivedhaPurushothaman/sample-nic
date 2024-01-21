import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { IOTDeviceComponent } from './views/pages/iot-device/iot-device.component';
import { RequestedUserComponent } from './views/pages/requested-user/requested-user.component';
import { ResolveGuard } from './core/guard/resolve.guard';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { UserDataService } from './services/user-data.service';
import { DemoPageModule } from './views/pages/demo-page/demo-page.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    IOTDeviceComponent,
    RequestedUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    DemoPageModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    UserDataService,
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    },
    ResolveGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
