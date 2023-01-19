import { AuthActions, EAuthActionTypes } from '../actions/auth.actions';
import { IAuthStore, INITIAL_AUTH_STORE } from '../auth.store';

export const authReducer = (authState = INITIAL_AUTH_STORE, action: AuthActions): IAuthStore => {
  switch (action.type) {
    case EAuthActionTypes.SET_TOKEN:
      return {
        ...authState,
        token: action.payload.token
      };
    case EAuthActionTypes.LOGOUT:
      return {
        ...authState,
        token: ''
      };
    default:
      return INITIAL_AUTH_STORE;
  }
}

