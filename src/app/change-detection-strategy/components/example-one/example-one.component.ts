import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent {
  @Input() user;

  update() {
    this.user.name = 'Matt Skiba';
  }
}
