import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '@shared/shared.module';
import { PopupConfirmComponent } from './popup-confirm.component';

@NgModule({
  declarations: [
    PopupConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule
  ]
})
export class PopupConfirmModule { }
