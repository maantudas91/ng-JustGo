import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CountryStateService {

  private countrySource = new BehaviorSubject<String>(null);
  $country = this.countrySource.asObservable();

  private stateSource = new BehaviorSubject<String>(null);
  $state = this.stateSource.asObservable();

  constructor(private http : HttpClient) { }


  getCountries() : Observable<any>{
    return this.http.get('./assets/data/countries.json')
          .pipe( map( (res : Response) => res ) )
  }


  getStates(country : String) : Observable<any>{
    return this.http.get('./assets/data/countryCity.json')
                .pipe( map( res => res['countries'].filter(list => list.country == country) )
               );
  }


  getCities(state : String) : Observable<any>{
    return this.http.get('./assets/data/cities.json')
                .pipe( map( res => res)
               );
  }


  setCountry(country : String) :void{
      this.countrySource.next(country);
  }

  setState(state : String) : void{
      this.stateSource.next(state);
  }

}
