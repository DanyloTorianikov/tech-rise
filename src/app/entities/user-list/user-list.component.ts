import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IFullUserInfo } from '@interfaces/user.interface';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  public users$: Observable<IFullUserInfo[]> = this.userService.getAllUsers();

  constructor(private userService: UserService) { }

  public ngOnInit(): void {
  }
}
