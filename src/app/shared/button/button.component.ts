import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EButtonSize, EButtonColor, EPositionIcon } from './enums/button.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public btnSize: EButtonSize = EButtonSize.medium;
  @Input() public iconPosition: EPositionIcon = EPositionIcon.left;
  @Input() public btnColor: EButtonColor = EButtonColor.lightGray;
  @Input() public disabledButton: boolean = false;
  @Input() public icon?: string;
  @Input() public text?: string;
  @Input() public isFullWidth?: boolean = false;

  public iconPositions: typeof EPositionIcon = EPositionIcon;
}
