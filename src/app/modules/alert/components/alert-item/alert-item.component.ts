
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import { LIFE_TIME } from '@modules/alert/constants/alert.constant';
import { EAlert } from '../../enums/alert.enum';
import { Alert } from '../../models/alert.model';

@Component({
  selector: 'app-alert-item',
  templateUrl: './alert-item.component.html',
  styleUrls: ['./alert-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertItemComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() public alert!: Alert;
  @Output() public onClose: EventEmitter<void> = new EventEmitter();
  public lifeTime = LIFE_TIME;
  public icon!: string;
  private timeout: any | null = null;

  constructor(private zone: NgZone) { }

  public ngOnInit(): void {
    this.icon = this.alert.type === EAlert.success ? 'check' : 'warning';
  }

  public ngAfterViewInit(): void {
    this.initTimer();
  }

  public ngOnDestroy(): void {
    this.clearTimer();
  }

  public close(): void {
    this.clearTimer();
    this.onClose.emit();
  }

  public mouseEnter(): void {
    this.clearTimer();
  }

  public mouseLeave(): void {
    this.initTimer();
  }

  private initTimer(): void {
    if (this.alert.autoClose) {
      this.zone.runOutsideAngular(() => {
        this.timeout = setTimeout(() => {
          this.onClose.emit();
        }, this.lifeTime);
      });
    }
  }

  private clearTimer(): void {
    if (!!this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
}
