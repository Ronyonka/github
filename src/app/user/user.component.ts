import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GithubSearchService} from '../github-request/github-search.service';
import { environment } from '../../environments/environment';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user:any[];
  // repos: any[];
  username:string;

  constructor(private githubService: GithubSearchService) {

  }

  findUser(){
  	this.githubService.updateUser(this.username);
  	this.githubService.getUserInfo().subscribe(user => {
  		console.log(user);
  		this.user = user;
  	});

  }

  ngOnInit() {
  }

}
