import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../shared/models/topic.module';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  advancedComponentTopics: Topic[];
  reactiveFormTopics: Topic[];
  routingTopics: Topic[];
  stateManagementTopics: Topic[];
  directivesTopics: Topic[];
  customPipesTopics: Topic[];
  dependencyInjectionAndZonesTopics: Topic[];
  unitTestingTopics: Topic[];

  ngOnInit() {
    this.advancedComponentTopics = [
      {
        name: 'Content Projection',
        path: '/content-projection'
      },
      {
        name: 'Injection Slots',
        path: '/injection-slots'
      },
      {
        name: 'Projecting Components',
        path: '/projecting-components'
      },
      {
        name: 'Content Child and After Content Init',
        path: '/content-child-and-after-content-init'
      },
      {
        name: 'Content Children and Query List',
        path: '/content-children-and-query-list'
      },
      {
        name: 'View Child and After View Init',
        path: '/view-child'
      },
      {
        name: 'View Children',
        path: '/view-children'
      },
      {
        name: 'Element Ref and Native Element',
        path: '/element-ref-native-element'
      },
      {
        name: 'Platform Renderer',
        path: '/platform-renderer'
      },
      {
        name: 'Dynamic Components',
        path: '/dynamic-components'
      },
      {
        name: 'Dynamic Input Data',
        path: '/dynamic-input-data'
      },
      {
        name: 'Dynamic Output Subscriptions',
        path: '/dynamic-output-subscriptions'
      },
      {
        name: 'Destroying Dynamic Components',
        path: '/destroying-dynamic-components'
      },
      {
        name: 'Dynamic Components Reordering',
        path: '/dynamic-components-reordering'
      },
      {
        name: 'Template Viewcontainer Ref',
        path: '/template-viewcontainer-ref'
      },
      {
        name: 'Template Context',
        path: '/template-context'
      },
      {
        name: 'Ng Template Outlet',
        path: '/ng-template-outlet'
      },
      {
        name: 'View Encapsulation and Shadow DOM',
        path: '/view-encapsulation-shadow-dom'
      },
      {
        name: 'Change Detection Strategy',
        path: '/change-detection-strategy'
      }
    ];

    this.reactiveFormTopics = [
      {
        name: 'Form Control and Form Group',
        path: '/form-control-form-group'
      },
      {
        name: 'Componentizing Form Group',
        path: '/componentizing-formgroup'
      },
      {
        name: 'Form Control Select',
        path: '/form-control-select'
      },
      {
        name: 'Form Array',
        path: '/form-array'
      },
      {
        name: 'Form Array Add',
        path: '/form-array-add'
      },
      {
        name: 'Form Array Remove',
        path: '/form-array-remove'
      },
      {
        name: 'Form Builder',
        path: '/form-builder'
      },
      {
        name: 'Joining Observables',
        path: '/joining-observables'
      },
      {
        name: 'Value Change Observables',
        path: '/value-changes-observables'
      },
      {
        name: 'Reset Update Form Controls',
        path: '/reset-update-form-controls'
      },
      {
        name: 'Custom Form Control Base',
        path: '/custom-form-control-base'
      },
      {
        name: 'Control Value Accessor',
        path: '/control-value-accessor'
      },
      {
        name: 'Keyboard Events',
        path: '/keyboard-events'
      },
      {
        name: 'Validators Object',
        path: '/validators-object'
      },
      {
        name: 'Custom Control Validator',
        path: '/custom-control-validator'
      },
      {
        name: 'Custom Form Group Validator',
        path: '/custom-formgroup-validator'
      },
      {
        name: 'Async Custom Validators',
        path: '/async-custom-validators'
      }
    ];

    this.routingTopics = [
      {
        name: 'Route Tracing',
        path: '/route-tracing'
      },
      {
        name: 'Router Events Subscription',
        path: '/'
      },
      {
        name: 'Router Outlet Events (Activate and Deactivate)',
        path: '/'
      },
      {
        name: 'Resolves',
        path: '/'
      },
      {
        name: 'Auxiliary Named Router Outlets',
        path: '/'
      },
      {
        name: 'Navigating to Auxiliary Named Outlets',
        path: '/'
      },
      {
        name: 'Auxiliary Navigation API',
        path: '/'
      },
      {
        name: 'Destroying Auxiliary Outlets',
        path: '/'
      },
      {
        name: 'Resolving Data for Auxiliary Outlets',
        path: '/'
      },
      {
        name: 'Lazy-loading Modules',
        path: '/'
      },
      {
        name: 'Preloading Lazy-loaded Modules',
        path: '/'
      },
      {
        name: 'Custom Preloading Strategies',
        path: '/'
      },
      {
        name: 'Protecting Lazy-loaded Modules with canLoad',
        path: '/'
      },
      {
        name: 'Guards with canActivate',
        path: '/'
      },
      {
        name: 'Guards with canActivateChild',
        path: '/'
      },
      {
        name: 'Guards with canDeactivate',
        path: '/'
      }
    ];

    this.stateManagementTopics = [
      {
        name: 'Creating an Observable Store with RxJs',
        path: '/'
      },
      {
        name: 'Container components setup',
        path: '/'
      },
      {
        name: 'Populating the Store and Component Subscription',
        path: '/'
      },
      {
        name: 'Composing new Observable Streams from our Store',
        path: '/'
      },
      {
        name: 'Integrating a stateless component',
        path: '/'
      },
      {
        name: 'Component Outputs back to Service',
        path: '/'
      },
      {
        name: 'Updating our Store in a Service',
        path: '/'
      }
    ];

    this.directivesTopics = [
      {
        name: 'Creating a custom attribute Directive',
        path: '/'
      },
      {
        name: '@HostListener and host Object',
        path: '/'
      },
      {
        name: 'Understanding @HostBinding',
        path: '/'
      },
      {
        name: 'Using the exportAs property with template refs',
        path: '/'
      },
      {
        name: 'Creating a custom structural Directive',
        path: '/'
      }
    ];

    this.customPipesTopics = [
      {
        name: 'Creating a Custom Pipe',
        path: '/'
      },
      {
        name: 'Pipes as Providers',
        path: '/'
      }
    ];

    this.dependencyInjectionAndZonesTopics = [
      {
        name: 'Providers and useValue',
        path: '/'
      },
      {
        name: 'Using InjectionToken',
        path: '/'
      },
      {
        name: 'Providers and useClass',
        path: '/'
      },
      {
        name: 'Providers and useFactory',
        path: '/'
      },
      {
        name: 'Providers and useExisting',
        path: '/'
      },
      {
        name: 'Configurable NgModules',
        path: '/'
      },
      {
        name: 'Zones and NgZone',
        path: '/'
      }
    ];

    this.unitTestingTopics = [
      {
        name: 'Karma Setup and Walkthrough',
        path: '/'
      },
      {
        name: 'Testing Isolate Pipes',
        path: '/'
      },
      {
        name: 'Shallow Testing Pipes',
        path: '/'
      },
      {
        name: 'Testing Services with Dependencies',
        path: '/'
      },
      {
        name: 'Testing Component Methods',
        path: '/'
      },
      {
        name: 'Testing @Input and @Output Bindings',
        path: '/'
      },
      {
        name: 'Testing Component Templates',
        path: '/'
      },
      {
        name: 'Testing Container Components with Async Providers',
        path: '/'
      },
      {
        name: 'Using NO_ERRORS_SCHEMA',
        path: '/'
      },
      {
        name: 'Testing an Attribute Directive',
        path: '/'
      }
    ];
  }
}
