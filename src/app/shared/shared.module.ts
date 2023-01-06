import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { ShowForAdminDirective } from './directives/show-for-admin.directive';

const COMPONENTS = [
  ButtonComponent,
  TitleComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ShowForAdminDirective
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [
    ...COMPONENTS,
    MatIconModule,
    ShowForAdminDirective
  ]
})
export class SharedModule { }
