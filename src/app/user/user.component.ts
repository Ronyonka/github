import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubSearchService } from '../github-request/github-search.service';
import { environment } from '../../environments/environment';
import { User } from '../user';
import {Repository} from '../repository';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: any[];
  repos: any[];
  username: string;
  // today = new Date();
  // lessThan = new Date("user.created_at");
  // greaterThan = new Date("2019-01-11");
  constructor(private githubService: GithubSearchService) {

  }

  findUser() {
    this.githubService.updateUser(this.username);
    this.githubService.getUserInfo().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.githubService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
