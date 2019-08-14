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
      }
    ];
  }
}
