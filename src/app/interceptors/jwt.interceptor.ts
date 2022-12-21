import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  private readonly apiUrl = environment.apiUrl;

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.match(this.apiUrl)) {
      let jwtToken = localStorage.getItem('token');

      if (!!jwtToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
      }
    }

    return next.handle(request);
  }
}
