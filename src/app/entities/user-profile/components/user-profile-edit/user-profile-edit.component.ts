import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { AlertService } from '@services/alert.service';
import { UserService } from '@services/user.service';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileEditComponent implements OnInit, OnDestroy {
  public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) { }

  public ngOnInit(): void {
    this.userService.getCurrentUser().pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public update(user: IUser): void {
    this.userService.updateUser(user).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.alertService.onSuccess('Profile updated successfully');
      this.router.navigateByUrl('profile/view');
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
