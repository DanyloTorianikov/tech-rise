import { ActionReducerMap } from "@ngrx/store";
import { IAuthStore } from "@entities/auth/store/auth.store";
import { authReducer } from "@entities/auth/store/reducers/auth.reducers";
import { IUserStore } from "@entities/user-profile/store/user.store";
import { userReducer } from "@entities/user-profile/store/reducers/user.reducers";

export interface IAppStore {
  auth: IAuthStore;
  user: IUserStore;
}

export const reducers: ActionReducerMap<IAppStore, any> = {
  auth: authReducer,
  user: userReducer,
};