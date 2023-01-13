import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { base64ToFile } from '@utils/base64.util';
import { IAuthResponse } from '@interfaces/auth.interface';
import { ILoginUser, IUser } from '@interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) { }

  public registration(user: IUser): Observable<IAuthResponse> {
    const formData = new FormData();
    Object.entries(user).forEach(([key, value]) => {
      if (key === 'avatar') {
        const image = value ? base64ToFile(value) : '';
        formData.append(key, image);
      } else if (key === 'codeCountry') {
        formData.append(`${key}[label]`, value.label);
        formData.append(`${key}[value]`, value.value);
      } else {
        formData.append(key, value);
      }
    });

    return this.httpClient.post<IAuthResponse>(`${this.apiUrl}auth/registration`, formData).pipe(
      tap(({ token }: IAuthResponse) => localStorage.setItem('token', token)),
    );
  }

  public login(user: ILoginUser): Observable<IAuthResponse> {
    return this.httpClient.post<IAuthResponse>(`${this.apiUrl}auth/login`, user).pipe(
      tap(({ token }: IAuthResponse) => localStorage.setItem('token', token)),
    );
  }

  public logout(): void {
    this.userService.removeUser();
  }
}