import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {GithubSearchService} from './github-request/github-search.service';
import{User} from './user';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
}
