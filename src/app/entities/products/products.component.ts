import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, Observable, takeUntil } from 'rxjs';
import { IUser } from '@interfaces/user.interface';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { currentUser } from '@entities/user-profile/store/selectors/user.selector';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { ETitleBtnShowOnMedia } from '@shared/title/enums/title.enum';
import { GetProducts } from './store/actions/products.actions';
import { products } from './store/selectors/products.selector';
import { IProduct } from './interfaces/products.interface';
import { AddProductPopupComponent } from './popups/add-product-popup/add-product-popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public products$: Observable<IProduct[]> = this.store.select(products);
  public currentUser!: IUser | null;
  public btnShowOnMedia: ETitleBtnShowOnMedia = ETitleBtnShowOnMedia.always;

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppStore>,
    @Self() private destroy$: UnsubscribeService,
  ) { }

  public ngOnInit(): void {
    this.updateList();
    this.getCurrentUser();
  }

  public updateList(): void {
    this.store.dispatch(new GetProducts());
  }

  public openAddProductPopup(): void {
    this.dialog.open(AddProductPopupComponent).afterClosed().pipe(
      filter(Boolean),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private getCurrentUser(): void {
    this.store.select(currentUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe((user: IUser | null) => this.currentUser = user);
  }
}
