import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { ETitleSize } from '@shared/title/enums/title.enum';
import { IUser } from '@interfaces/user.interface';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { GetCurrentUser } from '@entities/user-profile/store/actions/user.actions';
import { currentUser } from '@entities/user-profile/store/selectors/user.selector';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileViewComponent implements OnInit {
  public user$: Observable<IUser | null> = this.store.pipe(select(currentUser));
  public btnColor: EButtonColor = EButtonColor.lightGray;
  public titleSize: ETitleSize = ETitleSize.big;

  constructor(
    private router: Router,
    private store: Store<IAppStore>,
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetCurrentUser());
  }

  public navigateToEdit(): void {
    this.router.navigateByUrl('profile/edit')
  }

}
