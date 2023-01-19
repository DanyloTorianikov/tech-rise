import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { AuthService } from '@services/auth.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { UserService } from '@services/user.service';
import { IUser } from '@interfaces/user.interface';
import { Store } from '@ngrx/store';
import { IAuthStore } from '@entities/auth/store/auth.store';
import { Logout } from '@entities/auth/store/actions/auth.actions';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss'],
	providers: [UnsubscribeService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public user!: IUser | null;
	public userIsAdmin!: boolean;
	public isShowMobileMenu: boolean = false;
	public btnSize: EButtonSize = EButtonSize.medium;
	public btnColor: EButtonColor = EButtonColor.darkGray;

	constructor(
		private router: Router,
		private userService: UserService,
		private authService: AuthService,
		private cdr: ChangeDetectorRef,
		private store: Store<IAuthStore>,
		@Self() private destroy$: UnsubscribeService
	) { }

	public ngOnInit(): void {
		this.userService.currentUser$.pipe(
			takeUntil(this.destroy$)
		).subscribe((user: IUser | null) => {
			this.user = user;
			this.userIsAdmin = this.user?.roles?.includes('ADMIN')!;
			this.cdr.detectChanges();
		})
	}
	public toggleMobileMenu(): void {
		this.isShowMobileMenu = !this.isShowMobileMenu;
	}

	public onLogout(): void {
		this.authService.logout();
		this.store.dispatch(new Logout());
		this.router.navigateByUrl('/registration');
	}
}