import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthEffects } from '@entities/auth/store/effects/auth.effects';
import { UserEffects } from '@entities/user-profile/store/effects/user.effects';
import { UserListEffects } from '@entities/user-list/store/effects/user-list.effects';
import { UserListService } from '@entities/user-list/services/user-list.service';
import { AlertModule } from '@modules/alert/alert.module';
import { HeaderModule } from '@modules/header/header.module';
import { IconsRegistrarService } from '@services/icons-registrar.service';
import { reducers } from './root-store/reducers/root.reducers';
import { META_REDUCER } from './root-store/reducers/sync.reducers';
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
    MatDialogModule,
    InterceptorModule,
    StoreModule.forRoot(reducers, { metaReducers: META_REDUCER }),
    EffectsModule.forRoot([AuthEffects, UserEffects, UserListEffects]),
    StoreDevtoolsModule.instrument({
      name: 'TechRise App',
      logOnly: environment.production
})
  ],
  providers: [
    IconsRegistrarService,
    UserListService,
    MatDialog,
    { provide: APP_INITIALIZER, useFactory: initializeAppSteps, deps: [IconsRegistrarService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeAppSteps(iconsRegistrarService: IconsRegistrarService) {
  return (): Promise<void> => iconsRegistrarService.registerIcons();
}

