import { IUser } from '@interfaces/user.interface';
import { Action } from '@ngrx/store';

export enum EUserActionTypes {
  GET_CURRENT_USER = '[User] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[User] Get Current User Success',
  UPDATE_CURRENT_USER = '[User] Update Current User',
  UPDATE_CURRENT_USER_SUCCESS = '[User] Update Current User Success',
  DELETE_CURRENT_USER_SUCCESS = '[User] Delete Current User',
}

export class GetCurrentUser implements Action {
  readonly type = EUserActionTypes.GET_CURRENT_USER;
}

export class GetCurrentUserSuccess implements Action {
  readonly type = EUserActionTypes.GET_CURRENT_USER_SUCCESS;
  constructor(public payload: IUser) { }
}

export class UpdateCurrentUser implements Action {
  readonly type = EUserActionTypes.UPDATE_CURRENT_USER;
  constructor(public payload: IUser) { }
}

export class UpdateCurrentUserSuccess implements Action {
  readonly type = EUserActionTypes.UPDATE_CURRENT_USER_SUCCESS;
  constructor(public payload: IUser) { }
}

export class DeleteCurrentUser implements Action {
  readonly type = EUserActionTypes.DELETE_CURRENT_USER_SUCCESS;
}

export type UserActions = GetCurrentUser | GetCurrentUserSuccess | UpdateCurrentUser | UpdateCurrentUserSuccess | DeleteCurrentUser;
