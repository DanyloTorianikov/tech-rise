import { createSelector } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { IProductsStore } from '../products.store';

export const selectProductsState = (state: IAppStore) => state.products;
export const products = createSelector(selectProductsState, (state: IProductsStore) => state.products);