import { EUserListSort } from '@entities/user-list/enums/user-list-sort.enum';
import { IBanUser } from '@entities/user-list/interfaces/ban.interface';
import { IRole, IUpdateRole } from '@entities/user-list/interfaces/role.interface';
import { IPaginationData, IPaginationParams } from '@interfaces/pagination.interface';
import { IFullUserInfo } from '@interfaces/user.interface';
import { Action } from '@ngrx/store';

export enum EUserListActionTypes {
  GET_USER_LIST = '[User] Get User List',
  GET_USER_LIST_SUCCESS = '[User] Get Current User Success',
  BAN_USER = '[User] Ban User',
  BAN_USER_SUCCESS = '[User] Ban User Success',
  UPDATE_USER_ROLE = '[User] Update User Role',
  UPDATE_USER_ROLE_SUCCESS = '[User] Update User Role Success',
  GET_ALL_ROLES = '[User] Get All Roles',
  GET_ALL_ROLES_SUCCESS = '[User] Get All Roles Success',
}

export class GetUserList implements Action {
  readonly type = EUserListActionTypes.GET_USER_LIST;
  constructor(public payload?: IPaginationParams<EUserListSort>) { }
}

export class GetUserListSuccess implements Action {
  readonly type = EUserListActionTypes.GET_USER_LIST_SUCCESS;
  constructor(public payload: IPaginationData<IFullUserInfo>) { }
}

export class BanUser implements Action {
  readonly type = EUserListActionTypes.BAN_USER;
  constructor(public payload: IBanUser) { }
}

export class BanUserSuccess implements Action {
  readonly type = EUserListActionTypes.BAN_USER_SUCCESS;
}

export class UpdateUserRole implements Action {
  readonly type = EUserListActionTypes.UPDATE_USER_ROLE;
  constructor(public payload: IUpdateRole) { }
}

export class UpdateUserRoleSuccess implements Action {
  readonly type = EUserListActionTypes.UPDATE_USER_ROLE_SUCCESS;
}

export class GetAllRoles implements Action {
  readonly type = EUserListActionTypes.GET_ALL_ROLES;
}

export class GetAllRolesSuccess implements Action {
  readonly type = EUserListActionTypes.GET_ALL_ROLES_SUCCESS;
  constructor(public payload: IRole[]) { }

}

export type UserListActions = GetUserList | GetUserListSuccess | BanUser | BanUserSuccess | UpdateUserRole | UpdateUserRoleSuccess | GetAllRoles | GetAllRolesSuccess;
