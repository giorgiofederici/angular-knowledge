import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-injection-slots',
  templateUrl: './injection-slots.component.html',
  styleUrls: ['./injection-slots.component.scss']
})
export class InjectionSlotsComponent {
  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
