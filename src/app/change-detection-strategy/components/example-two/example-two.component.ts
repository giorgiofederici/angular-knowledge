import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-two',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: 'example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent {
  @Input()
  user;

  update() {
    this.user.name = 'Scott Raynor';
  }
}
