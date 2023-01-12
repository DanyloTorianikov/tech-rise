import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnChanges, Output } from '@angular/core';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { IUser } from '@interfaces/user.interface';
import { ETitleBtnShowOnMedia, ETitleSize } from './enums/title.enum';
import { IBreadcrumb } from './interfaces/breadcrumb.interface';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnChanges {
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() public titleSize: ETitleSize = ETitleSize.default;
  @Input() public btnShowOnMedia: ETitleBtnShowOnMedia = ETitleBtnShowOnMedia.lg;
  @Input() public btnSize: EButtonSize = EButtonSize.small;
  @Input() public btnColor: EButtonColor = EButtonColor.lightBlue;
  @Input() public showBtnForAdmin: boolean = false;
  @Input() public title?: string;
  @Input() public breadcrumbList?: IBreadcrumb[];
  @Input() public btnText?: string;
  @Input() public btnIcon?: string;
  @Input() public currentUser?: IUser;

  @HostBinding('class') private class = `${this.titleSize} ${this.btnShowOnMedia}`;

  public ngOnChanges(): void {
    this.class = `${this.titleSize} ${this.btnShowOnMedia}`;
  }
}
