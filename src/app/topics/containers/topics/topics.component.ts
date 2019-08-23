import { Component, OnInit } from '@angular/core';
import { Topic } from '../../../shared/models/topic.module';

@Component({
  selector: 'app-topics',
  templateUrl: 'topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  topics: Topic[];

  ngOnInit() {
    this.topics = [
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
      }
    ];
  }
}
