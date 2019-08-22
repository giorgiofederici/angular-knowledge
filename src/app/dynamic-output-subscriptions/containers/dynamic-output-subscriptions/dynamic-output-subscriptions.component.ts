import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit
} from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-dynamic-output-subscriptions',
  templateUrl: './dynamic-output-subscriptions.component.html',
  styleUrls: ['./dynamic-output-subscriptions.component.scss']
})
export class DynamicOutputSubscriptionsComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create Account';
    // We can subscribe to output events from the component
    component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
