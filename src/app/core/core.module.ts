import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from './vehicle.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header.interceptor';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers:[
    VehicleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
