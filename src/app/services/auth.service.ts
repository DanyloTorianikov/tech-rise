import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private userService: UserService,
    private httpClient: HttpClient
  ) { }

  public login(user: IUser): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}auth/registration`, user);
  }

  public logout(): void {
    this.userService.removeUser();
  }
}