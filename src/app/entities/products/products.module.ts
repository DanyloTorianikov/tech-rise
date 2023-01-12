import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { AddProductPopupComponent } from './popups/add-product-popup/add-product-popup.component';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent,
    AddProductPopupComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatDialogModule,
    FormElementsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
