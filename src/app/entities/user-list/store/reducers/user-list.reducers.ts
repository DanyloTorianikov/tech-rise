import { EUserListActionTypes, UserListActions } from "../actions/user-list.actions";
import { INITIAL_USER_LIST_STORE, IUserListStore } from "../user-list.store";

export const userListReducer = (userListStore = INITIAL_USER_LIST_STORE, action: UserListActions): IUserListStore => {
  switch (action.type) {
    case EUserListActionTypes.GET_USER_LIST_SUCCESS:
      return {
        ...userListStore,
        ...action.payload
      };
    case EUserListActionTypes.GET_ALL_ROLES_SUCCESS:
      return {
        ...userListStore,
        roles: action.payload
      };
    default:
      return { ...userListStore };
  }
}