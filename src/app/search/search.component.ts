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
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user:User;
  findControl = new FormControl ();
  error: boolean = false;
  user: User = null;
  constructor (private githubService:GithubSearchService) {}

  ngOnInit() {
    this.findControl.valueChanges
  .pipe (
    // Filter if less than two characters are entered
    filter (value => value.length> 2),
    // Set the delay to one second
    debounceTime (1000),
    // Requesting user data
    switchMap (value =>
      this.githubService.getUser (value) .pipe (
        // Error processing
        catchError (err => {
          this.user = null;
          this.error = true;
          return EMPTY;
        })
      )
    )
  )
  // Get the data
  .subscribe (user => {
    this.user = user;
    this.error = false;
  });
  }


}
