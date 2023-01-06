import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Self } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { takeUntil } from 'rxjs';
import { AlertService } from '@services/alert.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { Alert } from './models/alert.model';
import { MAX_ALERTS } from './constants/alert.constant';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate(250, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {
  public maxNotification = MAX_ALERTS;
  public alerts: Array<Alert> = [];

  constructor(
    private alertService: AlertService,
    private cdr: ChangeDetectorRef,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public ngOnInit(): void {
    this.alertService.getAlerts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((alert: Alert) => {
        if (this.alerts.length >= this.maxNotification) {
          this.alerts.pop();
        }
        this.alerts = [alert, ...this.alerts];
        this.cdr.markForCheck();
      });
  }

  public removeAlert(alert: Alert): void {
    this.alerts = this.alerts.filter((item: Alert) => item !== alert);
    this.cdr.detectChanges();
  }
}
