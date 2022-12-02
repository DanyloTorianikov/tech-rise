import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    ButtonComponent,
    MatIconModule,
  ]
})
export class SharedModule { }
