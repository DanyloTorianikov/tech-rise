import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IFullUserInfo, IUser } from '@interfaces/user.interface';
import { UserService } from '@services/user.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  public users$: Observable<IFullUserInfo[]> = this.userService.getAllUsers();
  public currentUser$: BehaviorSubject<IUser | null> = this.userService.currentUser$;

  constructor(private userService: UserService) { }

  public updateList(): void {
    this.users$ = this.userService.getAllUsers();
  }
}
