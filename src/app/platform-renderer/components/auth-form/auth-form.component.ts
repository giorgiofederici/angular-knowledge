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
  ViewChild,
  Renderer2
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

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // When we want to make our code platform agnostic, we need to use renderer
    // E.g. When we want to develop for web and mobile, do not use direct DOM methods
    this.renderer.setAttribute(
      this.email.nativeElement,
      'placeholder',
      'Enter your email address'
    );
    this.renderer.addClass(this.email.nativeElement, 'email');
    this.renderer.selectRootElement(this.email.nativeElement);
    // Render was deprecated and Renderer2 does not have this method.
    // Please, check following links for partial solutions or alternative
    // https://github.com/angular/angular/issues/15674
    // https://github.com/angular/angular/issues/13818
    // this.renderer.invokeElementMethod(this.email.nativeElement, 'focus');

    /* this.email.nativeElement.setAttribute(
      'placeholder',
      'Enter your email address'
    );
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus(); */

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
