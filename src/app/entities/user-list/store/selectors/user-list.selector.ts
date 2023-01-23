import { createSelector } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { IUserListStore } from '../user-list.store';

export const selectUserListState = (state: IAppStore) => state.userList;
export const userList = createSelector(selectUserListState, (state: IUserListStore) => state);
export const allRoles = createSelector(selectUserListState, (state: IUserListStore) => state.roles);
export const sortParams = createSelector(selectUserListState, (state: IUserListStore) => {
  const { order, sortBy, page, take, search } = state;
  return {
    order,
    sortBy,
    page,
    take,
    search
  }
});