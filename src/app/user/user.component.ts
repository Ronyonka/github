import { Component, OnInit } from '@angular/core';
import {GithubSearchService} from '../github-request/github-search.service';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any[];

  constructor(private githubService:GithubSearchService) {
    this.githubService.getUser().subscribe(use => {
      console.log(user);
      this.user = user;
    });
   }

  ngOnInit() {
  }

}
