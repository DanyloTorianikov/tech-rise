import { Action } from '@ngrx/store';
import { IAddProduct, IProduct } from '@entities/products/interfaces/products.interface';

export enum EProductsActionTypes {
  GET_PRODUCTS = '[Products] Get Products',
  GET_PRODUCTS_SUCCESS = '[Products] Get Products Success',
  ADD_PRODUCT = '[Products] Add Products',
  EDIT_PRODUCT = '[Products] Edit Products',
  DELETE_PRODUCT = '[Products] Delete Products',
}

export class GetProducts implements Action {
  readonly type = EProductsActionTypes.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = EProductsActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(public payload: IProduct[]) { }
}

export class AddProduct implements Action {
  readonly type = EProductsActionTypes.ADD_PRODUCT;
  constructor(public payload: IAddProduct) { }
}

export class EditProduct implements Action {
  readonly type = EProductsActionTypes.EDIT_PRODUCT;
  constructor(public payload: { product: IAddProduct, productId: number }) { }
}


export class DeleteProduct implements Action {
  readonly type = EProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload: { productId: number }) { }
}


export type ProductsActions = GetProducts | GetProductsSuccess | AddProduct | EditProduct | DeleteProduct;
