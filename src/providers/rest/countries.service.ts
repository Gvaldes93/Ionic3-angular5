import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {NavController} from "ionic-angular";
import {throwError} from "rxjs/index";

/*
  Generated class for the CountriesService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesService {

  readonly API_URL = 'https://restcountries.eu/rest/v2/all';

  constructor(public http: HttpClient) {
  }


  getCountries(): Observable<{}> {
    return this.http.get(this.API_URL).pipe(
      catchError(this.handleError),
    );
  }



  private handleError(error) {
   console.log("Hanlde error")
    return throwError(error.message);

  }

}
