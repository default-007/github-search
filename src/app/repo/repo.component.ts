import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  repos: Repo;
  username: string;

  constructor(private userService: UserServiceService) {
    this.userService.getRepos(this.username);
    this.repos = this.userService.repo;
    console.log(this.repos);
  }

  getProfile() {
    this.userService.getRepos(this.username);
    this.repos = this.userService.repo;
    console.log(this.repos);
  }

  ngOnInit() {}
}
