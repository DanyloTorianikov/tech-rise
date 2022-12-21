import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { UserProfileViewRoutingModule } from './user-profile-view-routing.module';
import { UserProfileViewComponent } from './user-profile-view.component';
import { UserDataComponent } from './components/user-data/user-data.component';

@NgModule({
  declarations: [
    UserProfileViewComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    UserProfileViewRoutingModule,
    SharedModule
  ]
})
export class UserProfileViewModule { }
