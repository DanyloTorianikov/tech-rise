import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@modules/header/header.module';
import { IconsRegistrarService } from '@services/icons-registrar.service';
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
    HeaderModule
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
