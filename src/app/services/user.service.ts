import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../interfaces/country.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser$: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.currentUser$.next(JSON.parse(localStorage.getItem('user')!));
  }

  public getCountry(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.flagsUrl);
  }

  public getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}users/me`).pipe(
      tap((user: IUser) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser$.next(user)
      })
    );
  }

  public saveUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  public updateUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser$.next(user);
  }

  public removeUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser$.next(null);
  }
}
