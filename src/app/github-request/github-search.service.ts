import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { environment } from '../../environments/environment'

@Injectable()

export class GithubSearchService {

  // apiUrl = environment.apiUrl;
  private username: string;

  constructor(private http: HttpClient) {
    console.log("service is now working !");
    this.username = 'Ronyonka';

  }

  getUserInfo(): any {
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=488d0e41f7e4e997e6e6ad4db80f0bef6376e674")
      .pipe(map(res => res));
  }
  getUserRepos(): any {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=d2c75a4d9ecfb3fc0c778d5821f034f7a6b1717e")//+ this.clientid + "&client_secret" +this.clientsecret)
      .pipe(map(res => res));
  }
  updateUser(username: string) {
    this.username = username;
  }
}
