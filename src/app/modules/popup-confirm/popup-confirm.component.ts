import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { IPopupConfirm } from './interfaces/popup-confirm.interface';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupConfirmComponent {
  public modalConfig!: IPopupConfirm;
  public btnColor: EButtonColor = EButtonColor.blue;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: IPopupConfirm,
    private dialogRef: MatDialogRef<PopupConfirmComponent>) {
    this.modalConfig = data;
    this.dialogRef.addPanelClass(['popup-confirm']);
  }
}
