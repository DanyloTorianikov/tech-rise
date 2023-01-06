import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { takeUntil } from 'rxjs';
import { PaginationInstance } from 'ngx-pagination';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { DISPLAYED_COLUMNS } from '../../constants/user-table.constant';
import { EUserListSort } from '../../enums/user-list-sort.enum';
import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'app-user-table-desktop',
  templateUrl: './user-table-desktop.component.html',
  styleUrls: ['./user-table-desktop.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableDesktopComponent {
  @Input() public users!: IFullUserInfo[];
  @Input() public currentUser!: IUser | null;
  @Input() public paginationConfig!: PaginationInstance;
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() public onSort: EventEmitter<EUserListSort> = new EventEmitter<EUserListSort>();

  public displayedColumns: string[] = DISPLAYED_COLUMNS;
  public userListSort: typeof EUserListSort = EUserListSort;

  constructor(
    private userListService: UserListService,
    @Self() private destroy$: UnsubscribeService
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
}
