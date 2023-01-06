import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EOrder } from '@enums/order.enum';
import { IPaginationData } from '@interfaces/pagination.interface';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { BreakpointService } from '@services/breakpoint.service';
import { UserService } from '@services/user.service';
import { PaginationInstance } from 'ngx-pagination';
import { BehaviorSubject, EMPTY, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { EUserListSort } from './components/enums/user-list-sort.enum';
import { TABLE_PAGINATION } from './constants/pagination.constant';
import { UserListService } from './services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit, OnDestroy {
  public isTablet: Observable<boolean> = this.breakpointService.isTablet();
  public users$: Observable<IPaginationData<IFullUserInfo>> = this.userListService.getAllUsers();
  public currentUser$: BehaviorSubject<IUser | null> = this.userService.currentUser$;
  public paginationConfig: PaginationInstance = TABLE_PAGINATION;
  public search: FormControl = new FormControl('');
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private userListService: UserListService,
    private breakpointService: BreakpointService
  ) { }

  public ngOnInit(): void {
    this.search.valueChanges.pipe(
      switchMap((search) => {
        this.users$ = this.userListService.getAllUsers({ search });
        return EMPTY;
      }),
      takeUntil(this.destroy$),
    ).subscribe()
  };

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public updateList(): void {
    this.users$ = this.userListService.getAllUsers();
  }

  public sort(sortBy: EUserListSort, orderParam: EOrder): void {
    const order = orderParam === EOrder.DESC ? EOrder.ASC : EOrder.DESC;
    this.users$ = this.userListService.getAllUsers({ sortBy, order });
  }

  public changePage(page: number): void {
    this.users$ = this.userListService.getAllUsers({ page });
  }
}
