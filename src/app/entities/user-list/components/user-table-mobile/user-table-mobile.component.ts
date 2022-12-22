import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFullUserInfo } from '@interfaces/user.interface';

@Component({
  selector: 'app-user-table-mobile',
  templateUrl: './user-table-mobile.component.html',
  styleUrls: ['./user-table-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableMobileComponent {
  @Input() public users!: IFullUserInfo[];
}
