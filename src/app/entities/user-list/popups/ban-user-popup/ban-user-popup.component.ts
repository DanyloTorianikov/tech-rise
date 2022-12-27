import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@services/user.service';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-ban-user-popup',
  templateUrl: './ban-user-popup.component.html',
  styleUrls: ['./ban-user-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BanUserPopupComponent implements OnInit, OnDestroy {
  public btnColor: typeof EButtonColor = EButtonColor;
  public isShowOptionalField: boolean = false;
  public banForm!: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<BanUserPopupComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { id: number, isBanned: boolean }

  ) {
    dialogRef.addPanelClass('ban-user-popup');
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public close(isChanged?: boolean): void {
    this.dialogRef.close(isChanged);
  }

  public submit(): void {

    if (!this.isShowOptionalField && !this.data.isBanned) {
      this.isShowOptionalField = true;
      return;
    }

    this.userService.banUser(this.banForm.getRawValue()).pipe(
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
