import { Action } from '@ngrx/store';
import { ILoginUser, IUser } from '@interfaces/user.interface';
import { IAuthResponse } from '@interfaces/auth.interface';

export enum EAuthActionTypes {
  LOGIN = '[Auth] Login',
  SET_TOKEN = '[Auth] Set Token',
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register Success',
  LOGOUT = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = EAuthActionTypes.LOGIN;
  constructor(public payload: ILoginUser) { }
}

export class SetToken implements Action {
  readonly type = EAuthActionTypes.SET_TOKEN;
  constructor(public payload: IAuthResponse) { }
}

export class Register implements Action {
  readonly type = EAuthActionTypes.REGISTER;
  constructor(public payload: IUser) { }
}

export class Logout implements Action {
  readonly type = EAuthActionTypes.LOGOUT;
}

export type AuthActions = Login | SetToken | Register | Logout;
