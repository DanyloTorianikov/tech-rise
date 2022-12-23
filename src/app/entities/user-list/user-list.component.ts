import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IFullUserInfo } from '@interfaces/user.interface';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  public users$: Observable<IFullUserInfo[]> = this.userService.getAllUsers();

  constructor(private userService: UserService) { }


  updateList() {
    console.log('2121212121')
    this.users$ = this.userService.getAllUsers();
  }
}
