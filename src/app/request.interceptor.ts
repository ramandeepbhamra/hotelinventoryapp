import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //return next.handle(request);
    console.log('Requst Interceptor', request);
    const cloneRequest = request.clone(
      {
        headers: new HttpHeaders({ 'rummyToken': '1234567890' })
      });
    return next.handle(cloneRequest);
  }
}