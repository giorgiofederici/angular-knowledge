import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-projecting-components',
  templateUrl: './projecting-components.component.html',
  styleUrls: ['./projecting-components.component.scss']
})
export class ProjectingComponentsComponent {
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
