import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Authorization': 'my-auth-token'
      })
    });

    console.log('Interceptada!');

    return next.handle(authReq);
  }
}