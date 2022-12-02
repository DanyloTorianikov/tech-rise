import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ISelect } from './interfaces/select.interface';
const noop = () => { };

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss', '../../form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements ControlValueAccessor {
  @Input() public placeholder!: string;
  @Input() public isError!: boolean;
  @Input() public errorMessage!: string;
  @Input() public options!: ISelect[];
  @Input() public disabled?: boolean;
  @Input() public label?: string;
  @Input() public isRequired?: boolean;

  @Input() public set value(val: ISelect) {
    this._value = val;
    this.onChange(this._value);
  }

  private _value!: ISelect;

  public get value(): ISelect {
    return this._value;
  }

  public compareObjects(mainObj: ISelect, compareObj: ISelect): boolean {
    return mainObj.label === compareObj.label && mainObj.value === compareObj.value;
  }

  public registerOnTouched: () => void = noop;
  public onChange: (_: any) => void = noop;

  public writeValue(value: ISelect): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
}
