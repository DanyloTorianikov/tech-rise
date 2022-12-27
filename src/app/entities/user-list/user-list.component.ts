import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { BreakpointService } from '@services/breakpoint.service';
import { UserService } from '@services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  public isTablet: Observable<boolean> = this.breakpointService.isTablet();
  public users$: Observable<IFullUserInfo[]> = this.userService.getAllUsers();
  public currentUser$: BehaviorSubject<IUser | null> = this.userService.currentUser$;

  constructor(
    private userService: UserService,
    private breakpointService: BreakpointService
  ) { }

  public updateList(): void {
    this.users$ = this.userService.getAllUsers();
  }
}
