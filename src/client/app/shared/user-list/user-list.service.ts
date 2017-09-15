/**
 * Created by TUSHAR_SK on 8/15/17.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config/env.config';


@Injectable()
export class UserListService {


  constructor(private http: Http) {}

  get(params: any): Observable<string[]> {

    return this.http.get(`${Config.API}/api/user-list/?email=${params}`)
      .map( res  => res.json())
      .catch(this.handleError);
  }

  post(params: any): Observable<string[]> {

    return this.http.post(`${Config.API}/api/user-list/`, params)
      .map(res => res.json())
      .catch(this.handleError);

  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}


