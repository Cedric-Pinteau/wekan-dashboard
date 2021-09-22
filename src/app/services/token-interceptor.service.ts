import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  // all http requests are intercepted and their header modified with the add of the token stored in cookies
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('https://wekan.lab-poc-projects.team/users/login') !== 0) {
      
      let loginService = this.injector.get(LoginService);
      let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${loginService.getToken()}`
        }
      })
      //console.log(tokenizedReq)
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }

}
