import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { Logout } from '@entities/auth/store/actions/auth.actions';
import { DeleteCurrentUser } from '@entities/user-profile/store/actions/user.actions';
import { base64ToFile } from '@utils/base64.util';
import { IAuthResponse } from '@interfaces/auth.interface';
import { ILoginUser, IUser } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private store: Store<IAppStore>
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

    return this.httpClient.post<IAuthResponse>(`${this.apiUrl}auth/registration`, formData);
  }

  public login(user: ILoginUser): Observable<IAuthResponse> {
    return this.httpClient.post<IAuthResponse>(`${this.apiUrl}auth/login`, user);
  }

  public logout(): void {
    this.store.dispatch(new Logout());
		this.store.dispatch(new DeleteCurrentUser());
  }
}