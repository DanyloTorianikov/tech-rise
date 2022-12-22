import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from '@services/user.service';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { ETitleSize } from '@shared/title/enums/title.enum';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileViewComponent implements OnDestroy, OnInit {
  public user$: BehaviorSubject<IUser | null> = this.userService.currentUser$;
  public btnColor: EButtonColor = EButtonColor.lightGray;
  public titleSize: ETitleSize = ETitleSize.big;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.userService.getCurrentUser().pipe(
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public navigateToEdit(): void {
    this.router.navigateByUrl('profile/edit')
  }

}
