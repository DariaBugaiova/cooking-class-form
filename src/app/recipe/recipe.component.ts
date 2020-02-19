import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/_services/user.service';
import { AuthenticationService } from '../shared/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  currentUserSubscription = new Subscription();
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
      this.loadAllUsers();
    }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  private loadAllUsers() {
    this.currentUserSubscription.add(this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    }));
  }
}
