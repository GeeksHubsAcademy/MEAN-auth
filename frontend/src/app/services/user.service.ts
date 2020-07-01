import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Login } from '../interfaces/login';
import { Credentials } from '../interfaces/credentials';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = environment.API_URL;
  private user: User;
  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL + '/users/register', user);
  }
  login(credentials: Credentials): Observable<Login> {
    return this.httpClient.post<Login>(this.API_URL + '/users/login', credentials);
  }
  setUser(user: User): void {
    this.user = user;
  }
  getUser(): User {
    return this.user;
  }

  logout(): void {
    this.httpClient.get(this.API_URL + '/users/logout' ).subscribe(console.log);
    this.setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
  }
}
