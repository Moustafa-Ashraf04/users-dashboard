import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUsersRes, UserDetailsRes } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  // Get users data for a specific page
  getUsers(page: number): Observable<GetUsersRes> {
    return this.http.get<GetUsersRes>(`${this.apiUrl}/users`, {
      params: { page: page.toString() },
    });
  }

  // Get details for a single user by ID
  getUserDetails(id: number): Observable<UserDetailsRes> {
    return this.http.get<UserDetailsRes>(`${this.apiUrl}/users/${id}`);
  }
}
