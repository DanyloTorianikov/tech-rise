import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IBreadcrumb } from '@shared/title/interfaces/breadcrumb.interface';
import { AuthService } from '@services/auth.service';
import { IUser } from 'src/app/interfaces/user.interface';
import { REGISTRATION_BREADCRUMBS } from './constants/registration.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnDestroy {
  public registrationBreadcrumbs: IBreadcrumb[] = REGISTRATION_BREADCRUMBS;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public save(user: IUser): void {
    this.authService.registration(user).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigate(['profile']);
    })

  }
}
