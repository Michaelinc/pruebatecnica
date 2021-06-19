import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_PATH = "api/user"

  httpOptions = {
    headers: new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Origin', '*')
  };

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<any> {
    return this.http.post<any>(environment.API_URL + this.BASE_PATH, user, this.httpOptions);
  }

  editUser(user: User): Observable<any> {
    return this.http.put<any>(environment.API_URL + this.BASE_PATH, user, this.httpOptions);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(environment.API_URL + this.BASE_PATH + "/" + id, this.httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(environment.API_URL + this.BASE_PATH, this.httpOptions);
  }
}
