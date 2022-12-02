import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '@shared/shared.module';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import { SelectComponent } from './select/select.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: true,
  };
};

@NgModule({
  declarations: [
    DatepickerComponent,
    InputComponent,
    InputAutocompleteComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  exports: [
    DatepickerComponent,
    InputComponent,
    InputAutocompleteComponent,
    SelectComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class FormElementsModule { }
