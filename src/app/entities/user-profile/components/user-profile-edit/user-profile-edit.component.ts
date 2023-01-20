import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IUser } from '@interfaces/user.interface';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { GetCurrentUser, UpdateCurrentUser } from '@entities/user-profile/store/actions/user.actions';
import { currentUser } from '@entities/user-profile/store/selectors/user.selector';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileEditComponent implements OnInit {
  public user$: Observable<IUser | null> = this.store.pipe(select(currentUser));

  constructor(
    private store: Store<IAppStore>,
  ) { }

  public ngOnInit(): void {
    this.store.dispatch(new GetCurrentUser());
  }

  public update(user: IUser): void {
    this.store.dispatch(new UpdateCurrentUser(user));
  }
}
