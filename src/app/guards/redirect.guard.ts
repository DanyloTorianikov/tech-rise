import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { map, Observable, tap } from "rxjs";
import { isLoggedIn } from "@entities/auth/store/selectors/auth.selector";
import { IAppStore } from "@root-store/reducers/root.reducers";

@Injectable()
export class RedirectGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<IAppStore>
  ) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedIn),
			map((isLoggedIn) => !isLoggedIn),
      tap((token) => {
        if (!token) {
          this.router.navigateByUrl('/profile');
        }
      })
    );

  }
}