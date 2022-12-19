import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AlertService } from '@services/alert.service';
import { AlertItemComponent } from './components/alert-item/alert-item.component';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent,
    AlertItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  providers: [
    AlertService
  ],
  exports: [
    AlertComponent
  ]
})
export class AlertModule {
}
