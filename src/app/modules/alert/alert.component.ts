import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
import { AlertService } from '@services/alert.service';
import { Alert } from './models/alert.model';
import { MAX_ALERTS } from './constants/alert.constant';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
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
export class AlertComponent implements OnInit, OnDestroy {
  public maxNotification = MAX_ALERTS;
  public alerts: Array<Alert> = [];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private alertService: AlertService,
    private cdr: ChangeDetectorRef
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

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public removeAlert(alert: Alert): void {
    this.alerts = this.alerts.filter(item => item !== alert);
    this.cdr.detectChanges();
  }
}
