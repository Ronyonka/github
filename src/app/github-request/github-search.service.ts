import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  constructor (private http:HttpClient) {}

  getUser(login:string): Observable <User> {
     const url = `https://api.github.com/users/${login}`;
     return this.http.get <User>(url);
   }
}
