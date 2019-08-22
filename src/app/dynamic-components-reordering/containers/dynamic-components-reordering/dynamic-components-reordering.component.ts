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
  selector: 'app-dynamic-components-reordering',
  templateUrl: './dynamic-components-reordering.component.html',
  styleUrls: ['./dynamic-components-reordering.component.scss']
})
export class DynamicComponentsReorderingComponent implements AfterContentInit {
  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    // Default index is -1
    this.entry.createComponent(authFormFactory);
    // The create account will appear before the other one (Login)
    this.component = this.entry.createComponent(authFormFactory, 0);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
