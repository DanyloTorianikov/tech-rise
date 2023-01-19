import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBreadcrumb } from '@shared/title/interfaces/breadcrumb.interface';
import { IUser } from '@interfaces/user.interface';
import { IAuthStore } from '../store/auth.store';
import { Register } from '../store/actions/auth.actions';
import { REGISTRATION_BREADCRUMBS } from './constants/registration.constant';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {
  public registrationBreadcrumbs: IBreadcrumb[] = REGISTRATION_BREADCRUMBS;

  constructor(
    private store: Store<IAuthStore>,
  ) { }

  public save(user: IUser): void {
    this.store.dispatch(new Register(user));
  }
}
