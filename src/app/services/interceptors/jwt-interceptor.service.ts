import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      console.log("JWT interceptor");
      let jwt = localStorage.getItem('token');
      if (jwt) {
        let bearerStr = "Bearer "+ jwt;
          request = request.clone({
              setHeaders: {
                  Authorization: bearerStr
              }
          });
      }

      return next.handle(request);
  }
}