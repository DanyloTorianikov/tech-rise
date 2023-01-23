import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { IProduct } from '@entities/products/interfaces/products.interface';
import { ProductsService } from '@entities/products/services/products.service';
import { AddProduct, DeleteProduct, EditProduct, EProductsActionTypes, GetProducts, GetProductsSuccess } from '../actions/products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
  ) { }

  private getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetProducts>(EProductsActionTypes.GET_PRODUCTS),
      switchMap(() => {
        return this.productsService.getAllProducts();
      }),
      map((products: IProduct[]) => new GetProductsSuccess(products))
    ),
  )

  private addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AddProduct>(EProductsActionTypes.ADD_PRODUCT),
      switchMap(({ payload }: AddProduct) => {
        return this.productsService.addProduct(payload);
      }),
      map(() => new GetProducts())
    ),
  )

  private editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType<EditProduct>(EProductsActionTypes.EDIT_PRODUCT),
      switchMap(({ payload }: EditProduct) => {
        return this.productsService.updateProduct(payload.product, payload.productId);
      }),
      map(() => new GetProducts())
    ),
  )

  private deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType<DeleteProduct>(EProductsActionTypes.DELETE_PRODUCT),
      switchMap(({ payload }: DeleteProduct) => {
        return this.productsService.deleteProduct(payload.productId);
      }),
      map(() => new GetProducts())
    ),
  )
}