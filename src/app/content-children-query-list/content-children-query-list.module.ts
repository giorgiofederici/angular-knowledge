import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContentChildrenQueryListComponent } from './containers/content-children-query-list/content-children-query-list.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ContentChildrenQueryListComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ContentChildrenQueryListComponent,
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class ContentChildrenQueryListModule {}
