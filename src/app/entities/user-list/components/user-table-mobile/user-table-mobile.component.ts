import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UserListService } from '@entities/user-list/services/user-list.service';
import { IPaginationData } from '@interfaces/pagination.interface';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { PaginationInstance } from 'ngx-pagination';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-table-mobile',
  templateUrl: './user-table-mobile.component.html',
  styleUrls: ['./user-table-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableMobileComponent implements OnDestroy {
  @Input() public users!: IFullUserInfo[];
  @Input() public currentUser!: IUser | null;
  @Input() public paginationConfig!: PaginationInstance;
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onChangePage: EventEmitter<number> = new EventEmitter<number>();

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userListService: UserListService,
    private cdr: ChangeDetectorRef
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

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
