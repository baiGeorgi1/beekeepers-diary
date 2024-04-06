import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserService } from './services/user.service';

import { environment } from 'src/environments/environment.development';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  userUrl = environment.userURL;
  API = '/users';
  constructor(private userService: UserService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.userService.getUser()?.accessToken;

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          'X-Authorization': accessToken,
        },
      });
    }

    req = req.clone({
      // url: req.url.replace(this.API, this.userUrl),
      // withCredentials: true,
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });

    return next.handle(req);
  }
}
export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
