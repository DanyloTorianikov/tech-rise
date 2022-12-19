import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { ISelect } from '@modules/form-elements/select/interfaces/select.interface';
import { AlertService } from '@services/alert.service';
import { UserService } from '@services/user.service';
import { EButtonColor, EButtonSize } from '@shared/button/enums/button.enum';
import { IBreadcrumb } from '@shared/title/interfaces/breadcrumb.interface';
import { EMAIL_PATTERN } from '@constants/email-pattern.constant';
import { ICountry } from '@interfaces/country.interface';
import { IUser } from '@interfaces/user.interface';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileInfoComponent implements OnInit, OnDestroy {
  @Output() public onSave: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Input() public title!: string;
  @Input() public user?: IUser;
  @Input() public breadcrumbs?: IBreadcrumb[];
  public btnSize: EButtonSize = EButtonSize.big;
  public btnColor: EButtonColor = EButtonColor.blue;
  public nameCounties!: string[];
  public flags!: ISelect[];
  public filteredNames$!: Observable<string[]>;
  public userForm!: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private alertService: AlertService,
  ) { }

  public ngOnInit(): void {
    this.initForm();

    this.userService.getCountry().pipe(
      takeUntil(this.destroy$)
    ).subscribe((countries: ICountry[]) => {
      this.nameCounties = countries.map((country: ICountry) => country.name.official);
      this.flags = countries.map((country: ICountry) => {
        return { label: country.flag, value: country.idd.root }
      });
      this.startFilter();
      this.cdr.markForCheck();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public showError(): void {
    this.alertService.onError('You cannot edit email or phone number. Please reach out to support team if you have any queries.');
  }

  public setUserPhoto(photo: string): void {
    this.userForm.get('userPhoto')?.setValue(photo);
  }

  public save(): void {
    this.markAllAsDirty();

    if (this.userForm.invalid) return;

    this.onSave.emit(this.userForm.getRawValue());
  }

  private startFilter(): void {
    this.filteredNames$ = this.userForm.get('country')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => {
        return this._filter(value || '')
      }),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.nameCounties?.filter((country: string) => country.toLowerCase().includes(filterValue));
  }

  private markAllAsDirty(): void {
    Object.keys(this.userForm.controls).forEach((key: string) => {
      this.userForm.get(key)!.markAsDirty();
    });
  }

  private initForm(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [EMAIL_PATTERN, Validators.required]],
      codeCountry: [{label: '🇺🇸', value: '+1'}],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      birthDate: ['', [Validators.required]],
      country: ['', [Validators.required]],
      webSite: [''],
      userPhoto: ['']
    });

    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }
}
