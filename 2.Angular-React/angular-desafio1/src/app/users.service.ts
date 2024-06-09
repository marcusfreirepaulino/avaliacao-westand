import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly httpClient: HttpClient) {}

  exec(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
