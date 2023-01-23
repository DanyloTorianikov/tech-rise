import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { IFullUserInfo } from '@interfaces/user.interface';
import { BanUser, BanUserSuccess, EUserListActionTypes, GetAllRoles, GetAllRolesSuccess, GetUserList, GetUserListSuccess, UpdateUserRole, UpdateUserRoleSuccess } from '../actions/user-list.actions';
import { UserListService } from '@entities/user-list/services/user-list.service';
import { IPaginationData } from '@interfaces/pagination.interface';
import { IRole } from '@entities/user-list/interfaces/role.interface';
import { RoleService } from '@entities/user-list/services/role.service';
import { Store } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { sortParams } from '../selectors/user-list.selector';
import { EOrder } from '@enums/order.enum';

@Injectable()
export class UserListEffects {
  constructor(
    private actions$: Actions,
    private userListService: UserListService,
    private roleService: RoleService,
    private stores$: Store<IAppStore>
  ) { }

  private getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetUserList>(EUserListActionTypes.GET_USER_LIST),
      withLatestFrom(this.stores$.select(sortParams)),
      switchMap(([action, store]) => {
        let payload = action.payload && JSON.parse(JSON.stringify(action.payload));

        if (payload?.hasOwnProperty('order')) {
          payload.order = store.order === EOrder.DESC ? EOrder.ASC : EOrder.DESC;
        }

        return this.userListService.getAllUsers(payload);
      }),
      map((user: IPaginationData<IFullUserInfo>) => new GetUserListSuccess(user)),
    )
  )

  private banUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType<BanUser>(EUserListActionTypes.BAN_USER),
      switchMap(({ payload }: BanUser) => {
        return this.userListService.banUser(payload);
      }),
      map(() => new BanUserSuccess()),
    )
  )

  private updateRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType<UpdateUserRole>(EUserListActionTypes.UPDATE_USER_ROLE),
      switchMap(({ payload }: UpdateUserRole) => {
        return this.roleService.updateRole(payload);
      }),
      map(() => new UpdateUserRoleSuccess()),
    )
  )

  private getAllRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetAllRoles>(EUserListActionTypes.GET_ALL_ROLES),
      switchMap(() => {
        return this.roleService.getAllRole();
      }),
      map((roles: IRole[]) => new GetAllRolesSuccess(roles)),
    )
  )

}