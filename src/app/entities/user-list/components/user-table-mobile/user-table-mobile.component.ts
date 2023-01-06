import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { takeUntil } from 'rxjs';
import { PaginationInstance } from 'ngx-pagination';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { IPaginationData } from '@interfaces/pagination.interface';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'app-user-table-mobile',
  templateUrl: './user-table-mobile.component.html',
  styleUrls: ['./user-table-mobile.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableMobileComponent {
  @Input() public users!: IFullUserInfo[];
  @Input() public currentUser!: IUser | null;
  @Input() public paginationConfig!: PaginationInstance;
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onChangePage: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private userListService: UserListService,
    private cdr: ChangeDetectorRef,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public openChangeRolePopup(id: number, userRoles: string[]): void {
    this.userListService.openChangeRolePopup(id, userRoles).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onUpdateList.emit();
    });
  }

  public loadPage(): void {
    if (this.users.length >= this.paginationConfig.totalItems!) return;

    const page = this.paginationConfig.currentPage + 1;

    this.userListService.getAllUsers({ page }).pipe(
      takeUntil(this.destroy$)
    ).subscribe(({ currentPage, data }: IPaginationData<IFullUserInfo>) => {
      this.users = [...this.users, ...data];
      this.paginationConfig.currentPage = currentPage;
      this.cdr.markForCheck();
    });
  }

  public openBanUserPopup(id: number, isBanned: boolean): void {
    this.userListService.openBanUserPopup(id, isBanned).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.onUpdateList.emit();
    });
  }
}
