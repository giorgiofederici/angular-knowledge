import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from './containers/content-projection/content-projection.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ContentProjectionComponent
  }
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [ContentProjectionComponent, AuthFormComponent]
})
export class ContentProjectionModule {}
