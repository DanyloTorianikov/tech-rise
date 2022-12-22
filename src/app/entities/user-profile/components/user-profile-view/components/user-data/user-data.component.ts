import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDataComponent {
  @Input() public icon!: string;
  @Input() public value!: string;
  @Input() public label!: string;
}
