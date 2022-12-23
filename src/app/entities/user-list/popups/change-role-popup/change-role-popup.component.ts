import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRole } from '@entities/user-list/interfaces/role.interface';
import { RoleService } from '@entities/user-list/services/role.service';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-change-role-popup',
  templateUrl: './change-role-popup.component.html',
  styleUrls: ['./change-role-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeRolePopupComponent implements OnInit, OnDestroy {
  public roleGroup!: FormGroup;
  public btnColor: EButtonColor = EButtonColor.blue;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ChangeRolePopupComponent>,
    private roleService: RoleService,
    @Inject(MAT_DIALOG_DATA) public data: { rolesList: IRole[], id: number, userRoles: string[] }
  ) {
    dialogRef.addPanelClass('change-role-popup')
  }

  public ngOnInit(): void {
    this.initGroup();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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

  public update() {
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
    })
  }


}
