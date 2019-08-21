import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ElementRefNativeElementComponent } from './containers/element-ref-native-element/element-ref-native-element.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ElementRefNativeElementComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ElementRefNativeElementComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ]
})
export class ElementRefNativeElementModule {}
