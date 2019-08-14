import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProjectingComponentsComponent } from './containers/projecting-components/projecting-components.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProjectingComponentsComponent
  }
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ProjectingComponentsComponent,
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class ProjectingComponentsModule {}
