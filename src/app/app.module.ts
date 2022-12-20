import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '@modules/alert/alert.module';
import { HeaderModule } from '@modules/header/header.module';
import { IconsRegistrarService } from '@services/icons-registrar.service';
import { InterceptorModule } from './interceptors/interceptor.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    AlertModule,
    InterceptorModule,
  ],
  providers: [
    IconsRegistrarService,
    { provide: APP_INITIALIZER, useFactory: initializeAppSteps, deps: [IconsRegistrarService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppSteps(iconsRegistrarService: IconsRegistrarService) {
  return (): Promise<void> => iconsRegistrarService.registerIcons();
}
