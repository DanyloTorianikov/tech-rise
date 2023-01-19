import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable, switchMap, take } from 'rxjs';
import { environment } from '../../environments/environment';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { selectToken } from "@entities/auth/store/selectors/auth.selector";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private store: Store<IAppStore>
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(selectToken),
      take(1),
      switchMap((token: string) => {
        if (request.url.match(this.apiUrl) && token) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
        }

        return next.handle(request);
      })
    )
  }
}
