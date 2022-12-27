import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { ShowForAdminDirective } from './directives/show-for-admin.directive';

@NgModule({
  declarations: [
    ButtonComponent,
    TitleComponent,
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
    ButtonComponent,
    MatIconModule,
    TitleComponent,
    ShowForAdminDirective
  ]
})
export class SharedModule { }
