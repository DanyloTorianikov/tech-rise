import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '@constants/email-pattern.constant';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { Subject, switchMap, takeUntil } from 'rxjs';

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
  private destroy$: Subject<void> = new Subject<void>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public login(): void {
    this.markAllAsDirty();

    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.getRawValue()).pipe(
      takeUntil(this.destroy$)
    ).subscribe((result) => {
      console.log(result);
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
      password: ['', [Validators.required]],
    })
  }

}
