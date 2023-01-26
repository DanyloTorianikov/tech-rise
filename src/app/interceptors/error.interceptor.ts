import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { AlertService } from '@services/alert.service';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status === 401) {
          this.authService.logout();
          this.router.navigate(['login']);
        }
        this.alertService.onError(err?.error?.message);
        return throwError(err);
      }));
  }
}
