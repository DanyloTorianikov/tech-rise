import { ChangeDetectionStrategy, Component, Inject, OnInit, Self } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { UserListService } from '../../services/user-list.service';

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
    private userListService: UserListService,
    private dialogRef: MatDialogRef<BanUserPopupComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number, isBanned: boolean },
    @Self() private destroy$: UnsubscribeService
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

    this.userListService.banUser(this.banForm.getRawValue()).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.close(true);
    });
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
