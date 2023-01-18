import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { SharedModule } from '@shared/shared.module';
import { FormElementsModule } from '@modules/form-elements/form-elements.module';
import { SupportService } from './services/support.service';
import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';

const config: SocketIoConfig = {
  url: environment.apiUrl,
};

@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SupportRoutingModule,
    FormElementsModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule
  ],
  providers: [
    SupportService
  ]
})
export class SupportModule { }
