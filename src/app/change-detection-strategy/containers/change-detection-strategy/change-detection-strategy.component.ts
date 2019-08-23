import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategy',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.scss']
})
export class ChangeDetectionStrategyComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }

  changeName() {
    this.user.name = 'Travis Barker';
  }

  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 41,
      location: 'California'
    };
  }
}
