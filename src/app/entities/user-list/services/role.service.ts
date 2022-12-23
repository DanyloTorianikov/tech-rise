import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRole, IUpdateRole } from '../interfaces/role.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAllRole(): Observable<IRole[]> {
    return this.http.get<IRole[]>(`${this.apiUrl}roles`);
  }

  public updateRole(roles: IUpdateRole): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}users/change-role`, roles);
  }
}
