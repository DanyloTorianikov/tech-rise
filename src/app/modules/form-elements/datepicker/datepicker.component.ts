import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss', '../../form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatepickerComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements ControlValueAccessor {
  @Input() public label!: string;
  @Input() public placeholder!: string;
  @Input() public isError!: boolean;
  @Input() public disabled?: boolean;
  @Input() public isRequired?: boolean;
  public today: Date = new Date();
  public isOpened: boolean = false;
  private _value!: Date;

  public registerOnTouched: () => void = noop;

  private onChange: (_: any) => void = noop;

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public onPickerOpen(): void {
    this.isOpened = true;
  }

  public onPickerClose(): void {
    this.isOpened = false;
  }

  public get value(): Date {
    return this._value;
  }

  @Input() public set value(val: Date) {
    this._value = val;
    this.onChange(this._value);
  }

  public writeValue(value: Date): void {
    this.value = value;
  }
}