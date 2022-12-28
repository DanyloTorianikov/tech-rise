import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UserListService } from '@entities/user-list/services/user-list.service';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { Subject, takeUntil } from 'rxjs';
import { DISPLAYED_COLUMNS } from '../constants/user-table.constant';

@Component({
  selector: 'app-user-table-desktop',
  templateUrl: './user-table-desktop.component.html',
  styleUrls: ['./user-table-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableDesktopComponent implements OnDestroy {
  @Input() public users!: IFullUserInfo[];
  @Input() public currentUser!: IUser | null;
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();
  public displayedColumns: string[] = DISPLAYED_COLUMNS;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userListService: UserListService
  ) { }

  public openChangeRolePopup(id: number, userRoles: string[]): void {
    this.userListService.openChangeRolePopup(id, userRoles).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onUpdateList.emit();
    });
  }

  public openBanUserPopup(id: number, isBanned: boolean): void {
    this.userListService.openBanUserPopup(id, isBanned).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onUpdateList.emit();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
