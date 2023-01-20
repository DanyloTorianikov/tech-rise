import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addPhoto } from '@utils/base64.util';
import { ICountry } from '@interfaces/country.interface';
import { IUser } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCountry(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.flagsUrl);
  }

  public getCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(`${this.apiUrl}users/me`);
  }

  public updateUser(user: IUser): Observable<IUser> {
    const formData = new FormData();
    Object.entries(user).forEach(([key, value]: string[]) => {
      if (key === 'codeCountry') return;
      
      if (key === 'avatar') {
        addPhoto(key, value, formData);
      } else {
        formData.append(key, value);
      }
    });
    return this.http.put<IUser>(`${this.apiUrl}users`, formData);
  }
}
