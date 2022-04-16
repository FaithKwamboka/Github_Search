import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserClass } from '../classes/user-class';
import { RepoClass } from '../classes/repo-class';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  username: string;

  constructor(private http: HttpClient) {
    this.username = 'FaithKwamboka';
  }
  getUser() {
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result => result));
  }
  getRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos')
      .pipe(map(result => result));
  }
  myUpdate(username:string){
    this.username = username
  }
}
