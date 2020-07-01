import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('authToken');
    const cRequest = request.clone({
      setHeaders: {
        authorization: token
      }
    });
    console.log(token);
    return token ? next.handle(cRequest) : next.handle(request);
  }
}
