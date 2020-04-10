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
    public userService: UserServiceService,
    private repoService: UserServiceService
  ) {}

  //getProfile() {
  //this.userService.getUsername(this.username);
  //his.userService.userInfo();
  //this.user = this.userService.user;

  // this.userService.getRepos(this.username);
  // this.repo = this.userService.repo;
  // console.log(this.repo);
  //}

  //  this.searchUsers = !this.searchUsers;
  //}

  // ngOnInit() {
  // this.userService.userInfo();
  //this.user = this.userService.user;

  //this.userService.getRepos(this.username);
  //this.repo = this.userService.repo;
  //}
  //}
  searchs(searchName) {
    this.myService.searchUSer(searchName).then(
      (success) => {
        this.user = this.myService.foundUser;
      },
      (error) => {
        console.log(error);
      }
    );
    this.repoService.getReopos(searchName).then(
      (results) => {
        this.repo = this.repoService.allRepos;
        console.log(this.repo);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.searchs('Owiti-Charles');
  }
}
