import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Self } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil, tap } from 'rxjs';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { AVAILABLE_FORMATS } from '@constants/available-formats.constant';
import { AlertService } from '@services/alert.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { ProductsService } from '../../services/products.service';
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
    private productsService: ProductsService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef,
    @Self() private destroy$: UnsubscribeService,
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
      this.productsService.updateProduct(product, this.data.product.id).pipe(
        tap(() => this.close(true)),
        takeUntil(this.destroy$)
      ).subscribe();
      return
    }
    this.productsService.addProduct(product).pipe(
      tap(() => this.close(true)),
      takeUntil(this.destroy$)
    ).subscribe();
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
