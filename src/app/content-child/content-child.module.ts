import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContentChildComponent } from './containers/content-child/content-child.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ContentChildComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ContentChildComponent,
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class ContentChildModule {}
