import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-content-children-query-list',
  templateUrl: './content-children-query-list.component.html',
  styleUrls: ['./content-children-query-list.component.scss']
})
export class ContentChildrenQueryListComponent {
  rememberMe: boolean;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }
}
