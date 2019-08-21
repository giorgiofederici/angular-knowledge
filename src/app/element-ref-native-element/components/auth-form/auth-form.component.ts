import {
  Component,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChildren,
  AfterViewInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
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

  @ViewChild('email', { static: false }) email: ElementRef;

  @ViewChildren(AuthMessageComponent)
  message: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // DOM methods - manipulate the DOM (for the Web environment)
    this.email.nativeElement.setAttribute(
      'placeholder',
      'Enter your email address'
    );
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();

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
