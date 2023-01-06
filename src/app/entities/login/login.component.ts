import { ChangeDetectionStrategy, Component, OnInit, Self } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { AuthService } from '@services/auth.service';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { EMAIL_PATTERN } from '@constants/email-pattern.constant';
import { PASSWORD_PATTERN } from '@constants/password-pattern.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public btnSize: EButtonSize = EButtonSize.big;
  public btnColor: EButtonColor = EButtonColor.blue;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public login(): void {
    this.markAllAsDirty();

    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.getRawValue()).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.router.navigate(['profile']);
    })
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
