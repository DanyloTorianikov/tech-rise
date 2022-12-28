import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable, switchMap } from 'rxjs';
import { IRole } from '../interfaces/role.interface';
import { BanUserPopupComponent } from '../popups/ban-user-popup/ban-user-popup.component';
import { ChangeRolePopupComponent } from '../popups/change-role-popup/change-role-popup.component';
import { RoleService } from './role.service';

@Injectable()
export class UserListService {

  constructor(
    private roleService: RoleService,
    private dialog: MatDialog,
  ) { }

  public openChangeRolePopup(id: number, userRoles: string[]): Observable<boolean> {
    return this.roleService.getAllRole().pipe(
      switchMap((rolesList: IRole[]) => {
        return this.dialog.open(ChangeRolePopupComponent, {
          data: {
            id,
            rolesList,
            userRoles
          }
        }).afterClosed()
      }),
      filter((isAdded: boolean) => isAdded)
    )
  }

  public openBanUserPopup(id: number, isBanned: boolean): Observable<boolean> {
    return this.dialog.open(BanUserPopupComponent, { data: { id, isBanned } }).afterClosed().pipe(
      filter((isChanged: boolean) => isChanged)
    )
  }
}
