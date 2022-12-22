import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileInfoModule } from '@modules/profile-info/profile-info.module';
import { UserProfileEditComponent } from './user-profile-edit.component';
import { UserProfileEditRoutingModule } from './user-profile-edit-routing.module';

@NgModule({
  declarations: [
    UserProfileEditComponent
  ],
  imports: [
    CommonModule,
    UserProfileEditRoutingModule,
    ProfileInfoModule
  ]
})
export class UserProfileEditModule { }
