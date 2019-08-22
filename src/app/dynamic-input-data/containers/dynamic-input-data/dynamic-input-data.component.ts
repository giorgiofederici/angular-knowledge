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
  selector: 'app-dynamic-input-data',
  templateUrl: './dynamic-input-data.component.html',
  styleUrls: ['./dynamic-input-data.component.scss']
})
export class DynamicInputDataComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent
    );
    const component = this.entry.createComponent(authFormFactory);
    // From the instance we can access to the component property
    // We don't have inputs as a normal component
    component.instance.title = 'Create Account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }
}
