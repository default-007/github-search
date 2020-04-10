import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  foundUser: User;
  allRepo: Repo;
  apiKey: string = environment.apiKey;
  //apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {
    this.foundUser = new User('', '', '', '', '', '', 0, 0, 0, new Date());
    this.allRepo = new Repo('', '', '', new Date(), 0, 0, '');
  }

  // getting profile info including the username, followers and following and the profile picture
  searchUser(userName: string) {
    interface Responce {
      url: string;
      name: string;
      email: string;
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http
        .get<Responce>(
          'https://api.github.com/users/' +
            userName +
            '?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (result) => {
            this.foundUser = result;
            console.log(this.foundUser);
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }

  // getting repo info

  getRepos(userName) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
      this.http
        .get<Repos>(
          'https://api.github.com/users/' +
            userName +
            '/repos?order=created&sort=asc?access_token=' +
            environment.apiKey
        )
        .toPromise()
        .then(
          (results) => {
            this.allRepo = results;
            resolve();
          },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }
}
//getUsername(username: string) {
//this.userName = username;
//}
//}
