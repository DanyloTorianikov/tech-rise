import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { UpdateUserRole } from '@entities/user-list/store/actions/user-list.actions';
import { EButtonColor } from '@shared/button/enums/button.enum';
import { IRole } from '../../interfaces/role.interface';

@Component({
  selector: 'app-change-role-popup',
  templateUrl: './change-role-popup.component.html',
  styleUrls: ['./change-role-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeRolePopupComponent implements OnInit {
  public roleGroup!: FormGroup;
  public btnColor: EButtonColor = EButtonColor.blue;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ChangeRolePopupComponent>,
    private store: Store<IAppStore>,
    @Inject(MAT_DIALOG_DATA) public data: { rolesList: IRole[], id: number, userRoles: string[] },
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
    this.store.dispatch(new UpdateUserRole(this.roleGroup.getRawValue()));
    this.close(true);
  }

  private initGroup(): void {
    this.roleGroup = this.formBuilder.group({
      userId: [this.data.id],
      roles: this.formBuilder.array([...this.data.userRoles])
    });
  }


}
