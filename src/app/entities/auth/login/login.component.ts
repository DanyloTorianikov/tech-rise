import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { EMAIL_PATTERN } from '@constants/email-pattern.constant';
import { PASSWORD_PATTERN } from '@constants/password-pattern.constant';
import { Login } from '../store/actions/auth.actions';
import { IAuthStore } from '../store/auth.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public btnSize: EButtonSize = EButtonSize.big;
  public btnColor: EButtonColor = EButtonColor.blue;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<IAuthStore>,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public login(): void {
    this.markAllAsDirty();

    if (this.loginForm.invalid) return;

    this.store.dispatch(new Login(this.loginForm.getRawValue()));
  }

  private markAllAsDirty(): void {
    Object.keys(this.loginForm.controls).forEach((key: string) => {
      this.loginForm.get(key)!.markAsDirty();
    });
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [EMAIL_PATTERN, Validators.required]],
      password: ['', [Validators.required, PASSWORD_PATTERN]],
    })
  }

}
