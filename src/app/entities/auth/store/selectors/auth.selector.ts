import { createSelector } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { IAuthStore } from '../auth.store';

export const selectAuthState = (state: IAppStore) => state.auth;
export const selectToken = createSelector(selectAuthState, (state: IAuthStore) => state.token);
export const isLoggedIn = createSelector(selectAuthState, (state: IAuthStore) => !!state.token);
