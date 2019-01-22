import { Component, OnInit } from '@angular/core';
import {GithubSearchService} from '../../github-request/github-search.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private user:any[];
  constructor(private githubService:GithubSearchService) {
    this.githubService.getUser().subscribe(use => {
      console.log(user);
    });
   }

  ngOnInit() {
  }

}
