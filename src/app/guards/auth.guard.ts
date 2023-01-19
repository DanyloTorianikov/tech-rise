import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { IAuthStore } from "@entities/auth/store/auth.store";
import { Store } from "@ngrx/store";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private store: Store<IAuthStore>
	) { }

	canActivate(): boolean {
		const isAuthenticated = !!localStorage.getItem('token');

		if (!isAuthenticated) {
			this.router.navigateByUrl('/login');
			return false;
		}

		return true;
	}

			// const isAuthenticated = !!localStorage.getItem('token');

		// return this.store.pipe(
		// 	select(isLoggedIn),
		// 	tap((token) => {
		// 		if (!token) {
		// 			this.router.navigateByUrl('/login');
		// 		}
		// 	})
		// )

		// 	if (!isAuthenticated) {
		// 		this.router.navigateByUrl('/login');
		// 		return false;
		// 	}

		// 	return true;
		// }
}