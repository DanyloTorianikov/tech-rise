import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-input-autocomplete',
  templateUrl: './input-autocomplete.component.html',
  styleUrls: ['./input-autocomplete.component.scss', '../../form-elements/form-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputAutocompleteComponent,
      multi: true
    }
  ],
})
export class InputAutocompleteComponent implements ControlValueAccessor {
  @Input() public placeholder!: string;
  @Input() public isError!: boolean;
  @Input() public errorMessage!: string;
  @Input() public isRequired?: boolean;
  @Input() public options!: string[];
  @Input() public disabled?: boolean;
  @Input() public label?: string;
  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  private _value!: string;

  public get value(): string {
    return this._value;
  }

  public registerOnTouched: () => void = noop;
  public onChange: (_: any) => void = noop;

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
}
