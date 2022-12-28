import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UserListService } from '@entities/user-list/services/user-list.service';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
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
  @Output() public onUpdateList: EventEmitter<void> = new EventEmitter<void>();

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
