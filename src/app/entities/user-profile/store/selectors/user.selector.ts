import { createSelector } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { IUserStore } from '../user.store';

export const selectUserState = (state: IAppStore) => state.user;
export const currentUser = createSelector(selectUserState, (state: IUserStore) => state.email ? state : null);