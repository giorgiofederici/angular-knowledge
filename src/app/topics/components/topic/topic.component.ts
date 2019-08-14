import { Component, Input } from '@angular/core';
import { Topic } from '../../../shared/models/topic.module';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent {
  @Input() topic: Topic;
}
