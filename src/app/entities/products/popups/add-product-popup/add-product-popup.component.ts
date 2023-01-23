import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { AddProduct, EditProduct } from '@entities/products/store/actions/products.actions';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { AVAILABLE_FORMATS } from '@constants/available-formats.constant';
import { AlertService } from '@services/alert.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { IProduct } from '../../interfaces/products.interface';

@Component({
  selector: 'app-add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductPopupComponent implements OnInit {
  public btnColor: EButtonColor = EButtonColor.blue;
  public addProductForm!: FormGroup;
  public fileName?: string;
  private availableFormats: string[] = AVAILABLE_FORMATS;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddProductPopupComponent>,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef,
    private store: Store<IAppStore>,
    @Inject(MAT_DIALOG_DATA) public data: { product: IProduct },
  ) {
    dialogRef.addPanelClass(['add-product-popup']);
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public deletePhoto(): void {
    this.addProductForm.get('image')?.reset();
    this.fileName = '';
  }

  public addProduct(): void {
    const product = this.addProductForm.getRawValue();

    if (this.data) {
      this.store.dispatch(new EditProduct({ product, productId: this.data.product.id }))
    } else {
      this.store.dispatch(new AddProduct(product));
    }

    this.close(true)
  }

  public selectPhoto(selectedPhoto: any): void {
    if (!this.isValidatePhoto(selectedPhoto?.target.files[0])) return;

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.fileName = selectedPhoto.target.files[0].name;
      this.addProductForm.get('image')?.setValue((fileReader.result as string));

      this.cdr.markForCheck();
    };

    fileReader.readAsDataURL(selectedPhoto.target.files[0]);
  }

  private isValidatePhoto(file: File): boolean {
    if (!this.availableFormats.includes(file.type.split('/')[1])) {
      this.showError('Invalid format');
      return false;
    }

    return true;
  }


  public close(isChange?: boolean): void {
    this.dialogRef.close(isChange);
  }

  public get possibleFormats(): string {
    return '.' + this.availableFormats.join(', .');
  }

  private initForm(): void {
    this.addProductForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]]
    });

    if (this.data) {
      const { id, ...product } = this.data.product
      this.addProductForm.setValue(product);
      this.fileName = product.image
    }
  }

  private showError(error: string): void {
    this.alertService.onError(error);
  }
}
