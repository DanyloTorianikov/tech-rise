import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { ETitleSize } from '@shared/title/enums/title.enum';
import { UserService } from '@services/user.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { IUser } from '@interfaces/user.interface';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileViewComponent implements OnInit {
  public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;
  public btnColor: EButtonColor = EButtonColor.lightGray;
  public titleSize: ETitleSize = ETitleSize.big;

  constructor(
    private userService: UserService,
    private router: Router,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public ngOnInit(): void {
    this.userService.getCurrentUser().pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public navigateToEdit(): void {
    this.router.navigateByUrl('profile/edit')
  }

}
