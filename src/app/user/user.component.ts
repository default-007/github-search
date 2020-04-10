import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { Repo } from '../repo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserServiceService],
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  searchUsers = true;

  user: User;
  repo: Repo;
  username: string;

  constructor(
    private userService: UserServiceService,
    private httpClient: HttpClient
  ) {}

  getProfile() {
    this.userService.getUsername(this.username);
    this.userService.userInfo();
    this.user = this.userService.user;

    this.userService.getRepos(this.username);
    this.repo = this.userService.repo;
    console.log(this.repo);
  }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }

  ngOnInit() {
    this.userService.userInfo();
    this.user = this.userService.user;

    this.userService.getRepos(this.username);
    this.repo = this.userService.repo;
  }
}
