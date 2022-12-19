import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ProfilePictureModule } from '@modules/profile-picture/profile-picture.module';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { ProfileInfoComponent } from './profile-info.component';

@NgModule({
  declarations: [
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfilePictureModule,
    ReactiveFormsModule,
    FormElementsModule
  ],
  exports: [
    ProfileInfoComponent
  ]
})
export class ProfileInfoModule { }
