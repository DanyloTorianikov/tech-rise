import { ChangeDetectionStrategy, Component, Inject, OnInit, Self } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeUntil } from 'rxjs';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { IRole } from '../../interfaces/role.interface';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-change-role-popup',
  templateUrl: './change-role-popup.component.html',
  styleUrls: ['./change-role-popup.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeRolePopupComponent implements OnInit {
  public roleGroup!: FormGroup;
  public btnColor: EButtonColor = EButtonColor.blue;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ChangeRolePopupComponent>,
    private roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) public data: { rolesList: IRole[], id: number, userRoles: string[] },
    @Self() private destroy$: UnsubscribeService
  ) {
    dialogRef.addPanelClass('change-role-popup')
  }

  public ngOnInit(): void {
    this.initGroup();
  }

  public close(isAdded?: boolean): void {
    this.dialogRef.close(isAdded);
  }

  public get rolesArray(): FormArray {
    return this.roleGroup?.get('roles')! as FormArray;
  }

  public changeRole(role: IRole): void {
    if (this.rolesArray?.value.includes(role.value)) {
      this.rolesArray.removeAt(this.rolesArray.value.findIndex((value: string) => role.value === value));
    } else {
      this.rolesArray.push(this.formBuilder.control(role.value));
    }
  }

  public update(): void {
    this.roleService.updateRole(this.roleGroup.getRawValue()).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.close(true);
    });
  }

  private initGroup(): void {
    this.roleGroup = this.formBuilder.group({
      userId: [this.data.id],
      roles: this.formBuilder.array([...this.data.userRoles])
    });
  }


}
