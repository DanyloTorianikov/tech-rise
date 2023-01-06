
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() public config!: PaginationInstance;
}
