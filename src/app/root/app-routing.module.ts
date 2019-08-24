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
  },
  {
    path: 'content-child-and-after-content-init',
    loadChildren: '../content-child/content-child.module#ContentChildModule'
  },
  {
    path: 'content-children-and-query-list',
    loadChildren:
      '../content-children-query-list/content-children-query-list.module#ContentChildrenQueryListModule'
  },
  {
    path: 'view-child',
    loadChildren: '../view-child/view-child.module#ViewChildModule'
  },
  {
    path: 'view-children',
    loadChildren: '../view-children/view-children.module#ViewChildrenModule'
  },
  {
    path: 'element-ref-native-element',
    loadChildren:
      '../element-ref-native-element/element-ref-native-element.module#ElementRefNativeElementModule'
  },
  {
    path: 'platform-renderer',
    loadChildren:
      '../platform-renderer/platform-renderer.module#PlatformRendererModule'
  },
  {
    path: 'dynamic-components',
    loadChildren:
      '../dynamic-components/dynamic-components.module#DynamicComponentsModule'
  },
  {
    path: 'dynamic-input-data',
    loadChildren:
      '../dynamic-input-data/dynamic-input-data.module#DynamicInputDataModule'
  },
  {
    path: 'dynamic-output-subscriptions',
    loadChildren:
      '../dynamic-output-subscriptions/dynamic-output-subscriptions.module#DynamicOutputSubscriptionsModule'
  },
  {
    path: 'destroying-dynamic-components',
    loadChildren:
      '../destroying-dynamic-components/destroying-dynamic-components.module#DestroyingDynamicComponentsModule'
  },
  {
    path: 'dynamic-components-reordering',
    loadChildren:
      '../dynamic-components-reordering/dynamic-components-reordering.module#DynamicComponentsReorderingModule'
  },
  {
    path: 'template-viewcontainer-ref',
    loadChildren:
      '../template-viewcontainer-ref/template-viewcontainer-ref.module#TemplateViewContainerRefModule'
  },
  {
    path: 'template-context',
    loadChildren:
      '../template-context/template-context.module#TemplateContextModule'
  },
  {
    path: 'ng-template-outlet',
    loadChildren:
      '../ng-template-outlet/ng-template-outlet.module#NgTemplateOutletModule'
  },
  {
    path: 'ng-template-outlet-context',
    loadChildren:
      '../ng-template-outlet-context/ng-template-outlet-context.module#NgTemplateOutletContextModule'
  },
  {
    path: 'view-encapsulation-shadow-dom',
    loadChildren:
      '../view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.module#ViewEncapsulationShadowDOMModule'
  },
  {
    path: 'change-detection-strategy',
    loadChildren:
      '../change-detection-strategy/change-detection-strategy.module#ChangeDetectionStrategyModule'
  },
  {
    path: 'form-control-form-group',
    loadChildren:
      '../form-control-form-group/form-control-form-group.module#FormControlFormGroupModule'
  },
  {
    path: 'componentizing-formgroup',
    loadChildren:
      '../componentizing-formgroup/componentizing-formgroup.module#ComponentizingFormGroupModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
