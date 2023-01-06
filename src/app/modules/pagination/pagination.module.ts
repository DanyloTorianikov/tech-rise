import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxPaginationModule
  ],
  exports: [
    PaginationComponent,
    NgxPaginationModule
  ]
})
export class PaginationModule {
}
