import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InjectionSlotsComponent } from './containers/injection-slots/injection-slots.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: InjectionSlotsComponent
  }
];

@NgModule({
  imports: [FormsModule, RouterModule.forChild(ROUTES)],
  declarations: [InjectionSlotsComponent, AuthFormComponent]
})
export class InjectionSlotsModule {}
