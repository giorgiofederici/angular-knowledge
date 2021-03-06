import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;

  @Input() map: Map<number, Product>;

  @Output() removed = new EventEmitter<any>();

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(id) {
    return this.map.get(id);
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
