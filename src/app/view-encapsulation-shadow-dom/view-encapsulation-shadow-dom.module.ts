import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewEncapsulationShadowDOMComponent } from './containers/view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { ExampleOneComponent } from './components/example-one/example-one.component';
import { ExampleTwoComponent } from './components/example-two/example-two.component';
import { ExampleThreeComponent } from './components/example-three/example-three.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ViewEncapsulationShadowDOMComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ViewEncapsulationShadowDOMComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent
  ]
})
export class ViewEncapsulationShadowDOMModule {}
