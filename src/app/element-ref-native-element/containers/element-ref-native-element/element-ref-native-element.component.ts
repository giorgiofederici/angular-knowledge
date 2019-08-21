import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-element-ref-native-element',
  templateUrl: './element-ref-native-element.component.html',
  styleUrls: ['./element-ref-native-element.component.scss']
})
export class ElementRefNativeElementComponent {
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
