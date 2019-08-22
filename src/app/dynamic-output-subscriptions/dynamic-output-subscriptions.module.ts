import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DynamicOutputSubscriptionsComponent } from './containers/dynamic-output-subscriptions/dynamic-output-subscriptions.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

const ROUTES: Routes = [
  {
    path: '',
    component: DynamicOutputSubscriptionsComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [
    DynamicOutputSubscriptionsComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  entryComponents: [AuthFormComponent]
})
export class DynamicOutputSubscriptionsModule {}
