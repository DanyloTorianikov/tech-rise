import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: () => import('./components/user-profile-view/user-profile-view.module').then(m => m.UserProfileViewModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./components/user-profile-edit/user-profile-edit.module').then(m => m.UserProfileEditModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule {
}