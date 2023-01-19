import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { IAuthResponse } from '@interfaces/auth.interface';
import { EAuthActionTypes, Login, SetToken, Register } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) { }

  private login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(EAuthActionTypes.LOGIN),
      switchMap(({ payload }: Login) => {
        return this.authService.login(payload);
      }),
      map(({ token }: IAuthResponse) => new SetToken({ token })),
      tap(() => this.router.navigate(['profile']))
    )
  )

  private register$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Register>(EAuthActionTypes.REGISTER),
      switchMap(({ payload }: Register) => {
        return this.authService.registration(payload);
      }),
      map(({ token }: IAuthResponse) => new SetToken({ token })),
      tap(() => this.router.navigate(['profile']))
    )
  )
}