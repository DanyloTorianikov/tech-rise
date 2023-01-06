import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@interfaces/user.interface';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss'],
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
		private cdr: ChangeDetectorRef
	) { }

	public ngOnInit(): void {
		this.userService.currentUser$.subscribe((user: IUser | null) => {
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
		this.router.navigateByUrl('/registration');
	}
}