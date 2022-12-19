import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICountry } from '../interfaces/country.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser$: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null); 
  constructor(private http: HttpClient) {
    this.currentUser$.next(JSON.parse(localStorage.getItem('user')!));
  }

  public getCountry(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>('https://restcountries.com/v3.1/all');
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
    localStorage.removeItem('user');
    this.currentUser$.next(null);
  }
}
