import { Component, OnInit } from '@angular/core';
import { RepoClass } from '../classes/repo-class';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [UserServiceService]
})
export class LandingPageComponent implements OnInit {
  user: any = [];
  repo: any = [];
  username!: string;

  constructor(private myservice: UserServiceService) { 
    this.myservice.getUser().subscribe(user => {
      this.user = user;
    });

    this.myservice.getRepos().subscribe(repo => {
      this.repo = repo;
    });

  }

  findUser() {
    this.myservice.myUpdate(this.username)
    this.myservice.getUser().subscribe(user => {
      this.user = user;
    });
    this.myservice.getRepos().subscribe(repo => {
      this.repo = repo;
    });
  }
  
  ngOnInit(): void {
  }

}
