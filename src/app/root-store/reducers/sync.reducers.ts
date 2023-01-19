import { ActionReducer, MetaReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { merge } from 'lodash';
import { IAppStore } from "./root.reducers";

const INIT_ACTION = '@ngrx/store/init';
const UPDATE_ACTION = '@ngrx/store/update-reducers';

const mergeReducer = (state: IAppStore, rehydratedState: IAppStore, action: { type: string }) => {
  console.log(action)
  if ((action.type === INIT_ACTION || action.type === UPDATE_ACTION) && rehydratedState) {
    state = merge(state, rehydratedState);
  }
  return state;
};

function localStorageSyncReducer(reducer: ActionReducer<IAppStore>): ActionReducer<IAppStore> {
  return localStorageSync({
    keys: ['auth'],
    rehydrate: true,
    mergeReducer
  })(reducer);
}

export const META_REDUCER: MetaReducer<IAppStore>[] = [localStorageSyncReducer];