import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMenuModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
