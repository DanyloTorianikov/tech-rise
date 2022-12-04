import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';

@Component({
	selector: 'app-header',
	templateUrl: 'header.component.html',
	styleUrls: ['header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
	public isLogin: boolean = true;
	public userPhoto: string = '';
	public isShowMobileMenu: boolean = false;
	public btnSize: EButtonSize = EButtonSize.medium;
	public btnColor: EButtonColor = EButtonColor.darkGray;

	constructor(
		private router: Router
	) { }

	public toggleMobileMenu(): void {
		this.isShowMobileMenu = !this.isShowMobileMenu;
	}

	public onLogout(): void {
		this.router.navigateByUrl('/registration');
	}
}