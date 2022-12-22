import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserTableMobileComponent } from './components/user-table-mobile/user-table-mobile.component';
import { UserTableDesktopComponent } from './components/user-table-desktop/user-table-desktop.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserTableMobileComponent,
    UserTableDesktopComponent,
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class UserListModule { }
