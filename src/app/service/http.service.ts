import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<any> {
    const url = `${environments.apiUrl}/users`;

    return this.http.get(url);
  }

  public getAllPosts(): Observable<any> {
    const url = `${environments.apiUrl}/posts`;

    return this.http.get(url);
  }

  public getPostsByUserId(userId: string | number): Observable<any> {
    const url = `${environments.apiUrl}/posts?userId=${userId}`;

    return this.http.get(url);
  }

  public getUserTodoByUserId(userId: string | number): Observable<any> {
    const url = `${environments.apiUrl}/todos?userId=${userId}`;

    return this.http.get(url);
  }
}
