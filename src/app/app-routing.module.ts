import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full',
  },
  {
    path: 'registration',
    loadChildren: () => import('./entities/registration/registration.module').then(m => m.RegistrationModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./entities/login/login.module').then(m => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
