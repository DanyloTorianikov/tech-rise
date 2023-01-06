import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UserListService } from '@entities/user-list/services/user-list.service';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { PaginationInstance } from 'ngx-pagination';
import { Subject, takeUntil } from 'rxjs';
import { DISPLAYED_COLUMNS } from '../constants/user-table.constant';
import { EUserListSort } from '../enums/user-list-sort.enum';

@Component({
  selector: 'app-user-table-desktop',
  templateUrl: './user-table-desktop.component.html',
  styleUrls: ['./user-table-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableDesktopComponent implements OnDestroy {
  @Input() public users!: IFullUserInfo[];
  @Input() public currentUser!: IUser | null;
  @Input() public paginationConfig!: PaginationInstance;
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() public onSort: EventEmitter<EUserListSort> = new EventEmitter<EUserListSort>();

  public displayedColumns: string[] = DISPLAYED_COLUMNS;
  public userListSort: typeof EUserListSort = EUserListSort;
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

  public sort(sortBy: EUserListSort): void {
    this.onSort.emit(sortBy);
  }

  public loadPage(page: number): void {
    this.onChangePage.emit(page);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
