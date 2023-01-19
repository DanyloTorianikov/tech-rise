import { ActionReducerMap } from "@ngrx/store";
import { IAuthStore } from "@entities/auth/store/auth.store";
import { authReducer } from "@entities/auth/store/reducers/auth.reducers";

export interface IAppStore {
  auth: IAuthStore;
}

export const reducers: ActionReducerMap<IAppStore, any> = {
  auth: authReducer,
};