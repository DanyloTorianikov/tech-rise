import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router
	) { }

	canActivate(): boolean {
		const isAuthenticated = !!localStorage.getItem('token');

		if (!isAuthenticated) {
			this.router.navigateByUrl('/login');
			return false;
		}

		return true;
	}
}