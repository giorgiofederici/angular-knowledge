import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'topics'
  },
  {
    path: 'topics',
    loadChildren: '../topics/topics.module#TopicsModule'
  },
  {
    path: 'content-projection',
    loadChildren:
      '../content-projection/content-projection.module#ContentProjectionModule'
  },
  {
    path: 'injection-slots',
    loadChildren:
      '../injection-slots/injection-slots.module#InjectionSlotsModule'
  },
  {
    path: 'projecting-components',
    loadChildren:
      '../projecting-components/projecting-components.module#ProjectingComponentsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
