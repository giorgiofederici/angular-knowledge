import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TopicsComponent } from './containers/topics/topics.component';
import { TopicComponent } from './components/topic/topic.component';

const ROUTES: Routes = [
  {
    path: '',
    component: TopicsComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [TopicsComponent, TopicComponent]
})
export class TopicsModule {}
