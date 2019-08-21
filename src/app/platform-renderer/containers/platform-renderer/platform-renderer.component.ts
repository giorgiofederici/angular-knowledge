import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-platform-renderer',
  templateUrl: './platform-renderer.component.html',
  styleUrls: ['./platform-renderer.component.scss']
})
export class PlatformRendererComponent {
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
