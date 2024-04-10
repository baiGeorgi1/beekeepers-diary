import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { UserService } from './services/user.service';

import { environment } from 'src/environments/environment.development';
import { ErrorService } from './core/errorHandling/error.service';
import { Router } from '@angular/router';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  userUrl = environment.userURL;
  API = '/users';
  constructor(
    private userService: UserService,
    private errorService: ErrorService,
    private router: Router
  ) {}

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
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });

    // return next.handle(req);
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/auth/login']);
        } else {
          this.errorService.setError(err);
          this.router.navigate(['/error']);
        }
        return [err];
      })
    );
  }
}
export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
