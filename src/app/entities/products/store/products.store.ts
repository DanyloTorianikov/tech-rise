import { IProduct } from "../interfaces/products.interface";

export interface IProductsStore {
  products: IProduct[];
}

export const INITIAL_PRODUCTS_STORE: IProductsStore = {
  products: [],
};