import { ActionReducerMap } from "@ngrx/store";
import { IAuthStore } from "@entities/auth/store/auth.store";
import { authReducer } from "@entities/auth/store/reducers/auth.reducers";
import { IUserStore } from "@entities/user-profile/store/user.store";
import { userReducer } from "@entities/user-profile/store/reducers/user.reducers";
import { userListReducer } from "@entities/user-list/store/reducers/user-list.reducers";
import { IUserListStore } from "@entities/user-list/store/user-list.store";

export interface IAppStore {
  auth: IAuthStore;
  user: IUserStore;
  userList: IUserListStore;
}

export const reducers: ActionReducerMap<IAppStore, any> = {
  auth: authReducer,
  user: userReducer,
  userList: userListReducer ,
};