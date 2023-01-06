import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPaginationData, IPaginationParams } from '@interfaces/pagination.interface';
import { IFullUserInfo } from '@interfaces/user.interface';
import { filter, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DEFAULT_PAGINATION_CONFIG } from '../components/constants/user-table.constant';
import { EUserListSort } from '../components/enums/user-list-sort.enum';
import { IRole } from '../interfaces/role.interface';
import { BanUserPopupComponent } from '../popups/ban-user-popup/ban-user-popup.component';
import { ChangeRolePopupComponent } from '../popups/change-role-popup/change-role-popup.component';
import { RoleService } from './role.service';

@Injectable()
export class UserListService {
  private apiUrl: string = environment.apiUrl;
  private sortParams: IPaginationParams<EUserListSort> = DEFAULT_PAGINATION_CONFIG;

  constructor(
    private roleService: RoleService,
    private dialog: MatDialog,
    private http: HttpClient
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
    );
  }

  public getAllUsers(userParams?: IPaginationParams<EUserListSort>): Observable<IPaginationData<IFullUserInfo>> {
    this.sortParams = { ...this.sortParams, ...userParams }
    const obj = JSON.parse(JSON.stringify(this.sortParams || {}));
    const params = new HttpParams({
      fromObject: obj,
    });

    return this.http.get<IPaginationData<IFullUserInfo>>(`${this.apiUrl}users`, { params });
  }
}
