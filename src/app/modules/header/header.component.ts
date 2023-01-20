import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { AuthService } from '@services/auth.service';
import { IUser } from '@interfaces/user.interface';
import { currentUser } from '@entities/user-profile/store/selectors/user.selector';
import { IAppStore } from '@root-store/reducers/root.reducers';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss'],
	providers: [UnsubscribeService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
	public user!: IUser | null;
	public isShowMobileMenu: boolean = false;
	public btnSize: EButtonSize = EButtonSize.medium;
	public btnColor: EButtonColor = EButtonColor.darkGray;

	constructor(
		private router: Router,
		private authService: AuthService,
		private cdr: ChangeDetectorRef,
		private store: Store<IAppStore>,
		@Self() private destroy$: UnsubscribeService
	) { }

	public ngOnInit(): void {
		this.store.pipe(
			select(currentUser),
			takeUntil(this.destroy$)
		).subscribe((user: IUser | null) => {
			this.user = user;
			this.cdr.detectChanges();
		})

	}
	public toggleMobileMenu(): void {
		this.isShowMobileMenu = !this.isShowMobileMenu;
	}

	public onLogout(): void {
		this.authService.logout();
		this.router.navigateByUrl('/registration');
	}
}