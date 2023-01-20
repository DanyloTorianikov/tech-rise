import { EUserActionTypes, UserActions } from "../actions/user.actions";
import { INITIAL_USER_STORE, IUserStore } from "../user.store";


export const userReducer = (userStore = INITIAL_USER_STORE, action: UserActions): IUserStore => {
  switch (action.type) {
    case EUserActionTypes.GET_CURRENT_USER_SUCCESS:
    case EUserActionTypes.UPDATE_CURRENT_USER_SUCCESS:
      return {
        ...userStore,
        ...action.payload
      };
    case EUserActionTypes.DELETE_CURRENT_USER_SUCCESS:
      return {
        ...userStore,
        ...INITIAL_USER_STORE
      };
    default:
      return {...userStore };
  }
}

