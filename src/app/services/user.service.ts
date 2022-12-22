import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../interfaces/country.interface';
import { IFullUserInfo, IUser } from '../interfaces/user.interface';
import { base64ToFile, isBase64 } from '../utils/base64.util';

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

  public getAllUsers(): Observable<IFullUserInfo[]> {
    return this.http.get<IFullUserInfo[]>(`${this.apiUrl}users`);
  }

  public updateUser(user: IUser): Observable<IUser> {
    const formData = new FormData();
    Object.entries(user).forEach(([key, value]) => {
      if (key === 'codeCountry') return;
      if (key === 'avatar') {
        this.addPhoto(key, value, formData);
      } else {
        formData.append(key, value);
      }
    })
    return this.http.put<IUser>(`${this.apiUrl}users`, formData).pipe(
      tap((user: IUser) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUser$.next(user);
      }));
  }

  public removeUser(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUser$.next(null);
  }

  private addPhoto(key: string, value: string, formData: FormData): void {
    if (!value) {
      formData.append(key, '');
      return;
    }

    if (!isBase64(value)) return;

    const image = value ? base64ToFile(value) : '';
    console.log(image)
    formData.append(key, image);
  }
}
