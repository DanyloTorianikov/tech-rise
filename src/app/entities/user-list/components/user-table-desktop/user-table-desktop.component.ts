import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFullUserInfo } from '@interfaces/user.interface';
import { DISPLAYED_COLUMNS } from '../constants/user-table.constant';

@Component({
  selector: 'app-user-table-desktop',
  templateUrl: './user-table-desktop.component.html',
  styleUrls: ['./user-table-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTableDesktopComponent {
  @Input() public users!: IFullUserInfo[];
  public displayedColumns: string[] = DISPLAYED_COLUMNS;
}
