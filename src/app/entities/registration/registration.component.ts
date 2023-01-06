import { ChangeDetectionStrategy, Component, Self } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { IBreadcrumb } from '@shared/title/interfaces/breadcrumb.interface';
import { AuthService } from '@services/auth.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { IUser } from '@interfaces/user.interface';
import { REGISTRATION_BREADCRUMBS } from './constants/registration.constant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {
  public registrationBreadcrumbs: IBreadcrumb[] = REGISTRATION_BREADCRUMBS;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public save(user: IUser): void {
    this.authService.registration(user).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigate(['profile']);
    })

  }
}
