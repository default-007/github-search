import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('${this.apiUrl}?per_page=10');
  }
}
