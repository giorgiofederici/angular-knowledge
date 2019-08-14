import {
  Component,
  Output,
  EventEmitter,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { User } from '../../../shared/models/user.module';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChild(AuthRememberComponent, { static: false })
  remember: AuthRememberComponent;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked;
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
