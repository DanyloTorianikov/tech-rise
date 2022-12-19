import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EAlert } from '@modules/alert/enums/alert.enum';
import { Alert } from '@modules/alert/models/alert.model';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<Alert>();

  public onError(message: string, autoClose: boolean = true): void {
    this.alertSubject.next(new Alert({
      message,
      type: EAlert.error,
      autoClose,
    }));
  }

  public onSuccess(message: string, autoClose: boolean = true): void {
    this.alertSubject.next(new Alert({
      message,
      type: EAlert.success,
      autoClose,
    }));
  }

  public getAlerts(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }
}
