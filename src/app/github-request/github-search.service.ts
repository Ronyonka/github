import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../user';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  apiUrl = environment.apiUrl;
  private username: string;

  constructor (private http:HttpClient) {
    console.log ("service is now working !");
      this.username = 'Ronyonka';

  }

  getUser(){
    return this.http.get("http://api.github.com/users/"+this.username+"?access_token=488d0e41f7e4e997e6e6ad4db80f0bef6376e674")
    .pipe(map(res=>res));
  }
}
