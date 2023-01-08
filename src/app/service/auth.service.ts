import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user: User): Observable<string> {
    return this.http.post<any>(environment.register, user);
  }

  public login(user: User): Observable<string> {
    return this.http.post<any>(environment.login, user);
  }

  public logout(user: User): Observable<string> {
    return this.http.post<any>(environment.logout, user);
  }
}