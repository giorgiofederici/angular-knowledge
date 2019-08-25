import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent {
  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step;
    }
  }

  decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step;
    }
  }
}
