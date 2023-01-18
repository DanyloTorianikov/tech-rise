import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from './guards/redirect.guard';
import { RoleGuard } from './guards/role.guard';

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
  {
    path: 'user-list',
    loadChildren: () => import('./entities/user-list/user-list.module').then(m => m.UserListModule),
    canActivate: [RoleGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./entities/products/products.module').then(m => m.ProductsModule),
  },
  {
    path: 'support',
    loadChildren: () => import('./entities/support/support.module').then(m => m.SupportModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
  providers: [AuthGuard, RedirectGuard, RoleGuard]
})
export class AppRoutingModule {
}
