import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GetUsersRes, UserDetailsRes } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  // Get users data for a specific page
  getUsers(page: number): Observable<GetUsersRes> {
    const cachedUsers = localStorage.getItem(`usersPage${page}`);

    // check for users in local storage or else make the request
    if (cachedUsers) {
      return of(JSON.parse(cachedUsers));
    } else {
      return this.http
        .get<GetUsersRes>(`${this.apiUrl}/users?page=${page}`)
        .pipe(
          tap((res) => {
            localStorage.setItem(`usersPage${page}`, JSON.stringify(res));
          })
        );
    }
  }

  // Get details for a single user by ID
  getUserDetails(id: number): Observable<UserDetailsRes> {
    const cachedUser = localStorage.getItem(`user${id}`);

    // check for user in local storage or else make the request
    if (cachedUser) {
      return of(JSON.parse(cachedUser));
    } else {
      return this.http.get<UserDetailsRes>(`${this.apiUrl}/users/${id}`).pipe(
        tap((res) => {
          localStorage.setItem(`user${id}`, JSON.stringify(res));
        })
      );
    }
  }
}
