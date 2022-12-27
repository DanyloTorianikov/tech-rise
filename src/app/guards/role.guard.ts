import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IUser } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  canActivate(): boolean {
    const user: IUser = JSON.parse(localStorage.getItem('user')!);
    return !!user?.roles?.some((role: string) => role === 'ADMIN' || role === 'SUPER_ADMIN');
  }

}
