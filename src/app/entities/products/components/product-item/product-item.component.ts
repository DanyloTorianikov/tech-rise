import { ChangeDetectionStrategy, Component, Input, Self } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs';
import { IUser } from '@interfaces/user.interface';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { DeleteProduct } from '@entities/products/store/actions/products.actions';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { PopupConfirmComponent } from '@modules/popup-confirm/popup-confirm.component';
import { AddProductPopupComponent } from '../../popups/add-product-popup/add-product-popup.component';
import { IProduct } from '../../interfaces/products.interface';
import { DELETE_PRODUCT_POPUP } from './constants/product-item.constant';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() public product!: IProduct;
  @Input() public currentUser!: IUser;

  public btnColor: typeof EButtonColor = EButtonColor;

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppStore>,
    @Self() private destroy$: UnsubscribeService,
  ) { }

  public editProduct(): void {
    this.dialog.open(AddProductPopupComponent, { data: { product: this.product } }).afterClosed().pipe(
      filter(Boolean),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public deleteProduct(): void {
    this.dialog.open(PopupConfirmComponent, { data: DELETE_PRODUCT_POPUP }).afterClosed().pipe(
      filter(Boolean),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.store.dispatch(new DeleteProduct({ productId: this.product.id }))
    })
  }
}
