import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { map, switchMap, tap } from 'rxjs';
import { UserService } from '@services/user.service';
import { IUser } from '@interfaces/user.interface';
import { AlertService } from '@services/alert.service';
import { EUserActionTypes, GetCurrentUser, GetCurrentUserSuccess, UpdateCurrentUser, UpdateCurrentUserSuccess } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService,
    private translateService: TranslateService,
  ) { }

  private getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetCurrentUser>(EUserActionTypes.GET_CURRENT_USER),
      switchMap(() => {
        return this.userService.getCurrentUser();
      }),
      map((user: IUser) => new GetCurrentUserSuccess(user)),
    )
  )

  private updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType<UpdateCurrentUser>(EUserActionTypes.UPDATE_CURRENT_USER),
      switchMap(({ payload }: UpdateCurrentUser) => {
        return this.userService.updateUser(payload)
      }),
      map((user: IUser) => new UpdateCurrentUserSuccess(user)),
      tap(() => {
        this.alertService.onSuccess(this.translateService.instant('editProfile.successfullyUpdated'));
        this.router.navigateByUrl('profile/view');
      })
    )
  )
}