import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserTableMobileComponent } from './components/user-table-mobile/user-table-mobile.component';
import { UserTableDesktopComponent } from './components/user-table-desktop/user-table-desktop.component';
import { ChangeRolePopupComponent } from './popups/change-role-popup/change-role-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { BanUserPopupComponent } from './popups/ban-user-popup/ban-user-popup.component';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { UserListService } from './services/user-list.service';

@NgModule({
  declarations: [
    UserListComponent,
    UserTableMobileComponent,
    UserTableDesktopComponent,
    ChangeRolePopupComponent,
    BanUserPopupComponent,
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormElementsModule
  ],
  providers: [UserListService]
})
export class UserListModule { }
