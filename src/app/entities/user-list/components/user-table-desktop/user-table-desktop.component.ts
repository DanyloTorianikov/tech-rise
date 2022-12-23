import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IRole } from '@entities/user-list/interfaces/role.interface';
import { BanUserPopupComponent } from '@entities/user-list/popups/ban-user-popup/ban-user-popup.component';
import { ChangeRolePopupComponent } from '@entities/user-list/popups/change-role-popup/change-role-popup.component';
import { RoleService } from '@entities/user-list/services/role.service';
import { IFullUserInfo } from '@interfaces/user.interface';
import { filter, Subject, switchMap, takeUntil } from 'rxjs';
import { DISPLAYED_COLUMNS } from '../constants/user-table.constant';

@Component({
  selector: 'app-user-table-desktop',
  templateUrl: './user-table-desktop.component.html',
  styleUrls: ['./user-table-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableDesktopComponent implements OnDestroy {
  @Input() public users!: IFullUserInfo[];
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();
  public displayedColumns: string[] = DISPLAYED_COLUMNS;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private roleService: RoleService,
    private dialog: MatDialog
  ) { }

  public openChangeRolePopup(id: number, userRoles: string[]): void {
    this.roleService.getAllRole().pipe(
      switchMap((rolesList: IRole[]) => {
        return this.dialog.open(ChangeRolePopupComponent, {
          data: {
            id,
            rolesList,
            userRoles
          }
        }).afterClosed()
      }),
      filter((isAdded: boolean) => isAdded),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onUpdateList.emit()
    });
  }

  public openBanUserPopup(id: number, isBanned: boolean) {
    this.dialog.open(BanUserPopupComponent, { data: { id, isBanned } });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
