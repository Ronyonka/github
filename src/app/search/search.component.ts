import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {GithubSearchService} from '../github-request/github-search.service';
import {User} from '../user';
// import {UserComponent} from '../user/user.component';
import {filter, switchMap, debounceTime, catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [GithubSearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:User;
  findControl = new FormControl ();
  error: boolean = false;
  // user: User = null;
  constructor (private githubService:GithubSearchService) {
    this.githubService.getUser().subscribe(profile =>{
      console.log(user);
    });
  }

  ngOnInit() {
  function findUser(){
    this.findControl.valueChanges
  .pipe (
    debounceTime (1000),
    switchMap (value =>
      this.githubService.getUser(value).pipe (
        catchError (err => {
          this.user = null;
          this.error = true;
          return EMPTY;
        })
      )
    )
  )

  .subscribe (user => {
    this.user = user;
    this.error = false;
  });
  }
}

}
