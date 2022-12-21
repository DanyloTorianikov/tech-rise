import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from './guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () => import('./entities/registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./entities/login/login.module').then(m => m.LoginModule),
    canActivate: [RedirectGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./entities/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [AuthGuard, RedirectGuard]
})
export class AppRoutingModule {
}
