import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => { };

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss', '../../form-elements/form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() public placeholder!: string;
  @Input() public isError!: boolean;
  @Input() public errorMessage!: string;
  @Input() public type: 'text' | 'password' | 'number' = 'text';
  @Input() public mask?: string;
  @Input() public disabled?: boolean;
  @Input() public label?: string;
  @Input() public isRequired?: boolean;
  @Input() public icon?: string;
  @Input() public set value(val: string) {
    this._value = val;
    this.onChange(this._value);
  }

  public hide: boolean = true;
  public _type!: 'text' | 'password' | 'number';

  private _value!: string;

  public get value(): string {
    return this._value;
  }

  public ngOnInit(): void {
    this._type = this.type;
  }

  public onHide(): void {
    this.hide = !this.hide;
    this._type = this.hide ? 'password' : 'text';
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
