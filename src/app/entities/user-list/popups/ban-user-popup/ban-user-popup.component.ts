import { ChangeDetectionStrategy, Component, Inject, OnInit, Self } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { BanUser } from '@entities/user-list/store/actions/user-list.actions';
import { UnsubscribeService } from '@services/unsubscribe.service';

@Component({
  selector: 'app-ban-user-popup',
  templateUrl: './ban-user-popup.component.html',
  styleUrls: ['./ban-user-popup.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BanUserPopupComponent implements OnInit {
  public btnColor: typeof EButtonColor = EButtonColor;
  public isShowOptionalField: boolean = false;
  public banForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<BanUserPopupComponent>,
    private formBuilder: FormBuilder,
    private store: Store<IAppStore>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number, isBanned: boolean },
  ) {
    dialogRef.addPanelClass('ban-user-popup');
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public close(isChanged?: boolean): void {
    this.dialogRef.close(isChanged);
  }

  public submit(): void {

    if (!this.isShowOptionalField && !this.data.isBanned) {
      this.isShowOptionalField = true;
      return;
    }
    this.store.dispatch(new BanUser(this.banForm.getRawValue()));
    this.close(true);
  }

  private initForm() {
    const { id, isBanned } = this.data;

    this.banForm = this.formBuilder.group({
      userId: [id],
      banReason: [''],
      ban: [!isBanned]
    })
  }
}
