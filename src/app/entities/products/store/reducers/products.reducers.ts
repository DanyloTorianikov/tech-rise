import { EProductsActionTypes, ProductsActions } from "../actions/products.actions";
import { INITIAL_PRODUCTS_STORE, IProductsStore } from "../products.store";

export const productsReducer = (productsStore = INITIAL_PRODUCTS_STORE, action: ProductsActions): IProductsStore => {
  switch (action.type) {
    case EProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...productsStore,
        products: [...action.payload]
      };
    default:
      return { ...productsStore };
  }
}