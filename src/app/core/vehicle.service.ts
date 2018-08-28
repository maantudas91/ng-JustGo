import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class VehicleService {

  constructor(private http : HttpClient) { }


  addNewVehicle(payload: any) : Observable<any>{
    return this.http.post(`${environment.apiUrl}add/vehicle`, payload)
                .pipe(
                  map( (res: any) => res)
                );
  }

}
