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
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

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
    IonicModule.forRoot(),
  ],
  providers: [
    IconsRegistrarService,
    { provide: APP_INITIALIZER, useFactory: initializeAppSteps, deps: [IconsRegistrarService], multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppSteps(iconsRegistrarService: IconsRegistrarService) {
  return (): Promise<void> => iconsRegistrarService.registerIcons();
}
