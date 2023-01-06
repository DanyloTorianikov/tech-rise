import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { AlertService } from '@services/alert.service';
import { UserService } from '@services/user.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { IUser } from '@interfaces/user.interface';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileEditComponent implements OnInit {
  public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    @Self() private destroy$: UnsubscribeService
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
}
