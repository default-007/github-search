import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers: [UserServiceService],
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  searchUsers = true;

  repo: Repo;
  username: string;

  constructor(private repoService: UserServiceService) {}

  search(username) {
    this.repoService.getRepoDetails(username).then(
      (results) => {
        this.repo = this.repoService.newRepo;
        console.log(results);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
