import { Injectable } from '@angular/core';
import { UserCredentials } from 'src/app/models/user/user-credentials';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _loggedIn : boolean = false;
 
  constructor(
    private http : HttpClient,
    private router : Router
  ) {}
  
  authenticate(credentials : UserCredentials){
    console.log("inside authenticate function");
    return this.http.post<any>("/api/auth", credentials, {observe: 'response'}).pipe(
      map(res => {
        console.log(res);
        if(res.status !== 200){
          return { status : false, message : "Invalid Username or password"};
        }
        this._loggedIn = true;
        let tokenObj = res.body;
        localStorage.setItem("token", tokenObj['token']);
        this.router.navigate(['/products']);
      }),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let status = { status : false, message : "Invalid Username or password"};
    console.log(error);
    return throwError(status);
  }

  get isLoggedIn(){
    return this._loggedIn;
  }
}