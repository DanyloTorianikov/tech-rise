import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ILoginUser, IUser } from 'src/app/interfaces/user.interface';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse } from '@interfaces/auth.interface';

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
        const image = value ? this.base64ToFile(value) : '';
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

  private base64ToFile(file: any): File {
    let arr = file.split(','),
      type = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      number = bstr.length,
      u8arr = new Uint8Array(number);

    while (number--) {
      u8arr[number] = bstr.charCodeAt(number);
    }

    return new File([u8arr], `avatar.png`, { type });
  }
}