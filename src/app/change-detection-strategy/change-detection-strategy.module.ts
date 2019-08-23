import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionStrategyComponent } from './containers/change-detection-strategy/change-detection-strategy.component';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { ExampleTwoComponent } from './components/example-two/example-two.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ChangeDetectionStrategyComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ChangeDetectionStrategyComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ]
})
export class ChangeDetectionStrategyModule {}
