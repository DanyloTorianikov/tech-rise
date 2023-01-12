import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, takeUntil } from 'rxjs';
import { IUser } from '@interfaces/user.interface';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { AddProductPopupComponent } from '../../popups/add-product-popup/add-product-popup.component';
import { IProduct } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';

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
  @Output() public updateList: EventEmitter<void> = new EventEmitter<void>();

  public btnColor: typeof EButtonColor = EButtonColor;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService,
    @Self() private destroy$: UnsubscribeService,
  ) { }

  public editProduct(): void {
    this.dialog.open(AddProductPopupComponent, { data: { product: this.product } }).afterClosed().pipe(
      filter((isChange: boolean) => isChange),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.updateList.emit();
    });
  }

  public deleteProduct(): void {
    this.productsService.deleteProduct(this.product.id).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => this.updateList.emit());
  }
}
