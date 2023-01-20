import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, switchMap, takeUntil } from 'rxjs';
import { PaginationInstance } from 'ngx-pagination';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { currentUser } from '@entities/user-profile/store/selectors/user.selector';
import { BreakpointService } from '@services/breakpoint.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { EOrder } from '@enums/order.enum';
import { TABLE_PAGINATION } from '@constants/pagination.constant';
import { IPaginationData } from '@interfaces/pagination.interface';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { EUserListSort } from './enums/user-list-sort.enum';
import { UserListService } from './services/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  public isTablet: Observable<boolean> = this.breakpointService.isTablet();
  public users$: Observable<IPaginationData<IFullUserInfo>> = this.userListService.getAllUsers();
  public currentUser$: Observable<IUser | null> = this.store.select(currentUser);
  public paginationConfig: PaginationInstance = TABLE_PAGINATION;
  public search: FormControl = new FormControl('');

  constructor(
    private userListService: UserListService,
    private breakpointService: BreakpointService,
    private store: Store<IAppStore>,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public ngOnInit(): void {
    this.search.valueChanges.pipe(
      switchMap((search: string) => {
        this.users$ = this.userListService.getAllUsers({ search });
        return EMPTY;
      }),
      takeUntil(this.destroy$),
    ).subscribe()
  };

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
