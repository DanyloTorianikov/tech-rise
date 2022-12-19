import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ProfilePictureComponent } from './profile-picture.component';

@NgModule({
  declarations: [
    ProfilePictureComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfilePictureComponent
  ]
})
export class ProfilePictureModule { }
