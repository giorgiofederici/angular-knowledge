import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit,
  ComponentRef
} from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { User } from '../../../shared/models/user.module';

@Component({
  selector: 'app-destroying-dynamic-components',
  templateUrl: './destroying-dynamic-components.component.html',
  styleUrls: ['./destroying-dynamic-components.component.scss']
})
export class DestroyingDynamicComponentsComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
