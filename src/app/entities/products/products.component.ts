import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable, takeUntil } from 'rxjs';
import { IUser } from '@interfaces/user.interface';
import { UserService } from '@services/user.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { ETitleBtnShowOnMedia } from '@shared/title/enums/title.enum';
import { IProduct } from './interfaces/products.interface';
import { AddProductPopupComponent } from './popups/add-product-popup/add-product-popup.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.productsService.getAllProducts();
  public currentUser!: IUser | null;
  public btnShowOnMedia: ETitleBtnShowOnMedia = ETitleBtnShowOnMedia.always;

  constructor(
    private productsService: ProductsService,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    @Self() private destroy$: UnsubscribeService,
  ) { }

  public ngOnInit(): void {
    this.getCurrentUser();
  }

  public updateList(): void {
    this.products$ = this.productsService.getAllProducts();
    this.cdr.markForCheck();
  }

  public openAddProductPopup(): void {
    this.dialog.open(AddProductPopupComponent).afterClosed().pipe(
      filter(Boolean),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.updateList();
    });
  }

  private getCurrentUser(): void {
    this.userService.currentUser$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((user: IUser | null) => this.currentUser = user);
  }
}
