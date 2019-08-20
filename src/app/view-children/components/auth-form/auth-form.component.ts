import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChildren,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { User } from '../../../shared/models/user.module';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterViewInit, AfterContentInit {
  showMessage: boolean;

  @ViewChildren(AuthMessageComponent)
  message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (this.message) {
      this.message.forEach(message => {
        message.days = 30;
      });
      // The previous code will throw an error in development, not in production
      // Because Angular enables a dection changes to avoid changes duruing view init.
      // We can change this behaviour adding the following:
      this.cd.detectChanges();
    }
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach(item => {
        item.checked.subscribe((checked: boolean) => {
          this.showMessage = checked;
        });
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
