import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { Product, Item } from '../../models/product.model';

import { StockInventoryService } from '../../services/stock-inventory.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
  products: Product[];

  productMap: Map<number, Product>;

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  });

  constructor(
    private fb: FormBuilder,
    private stockInventoryService: StockInventoryService
  ) {}

  ngOnInit() {
    const cartObs = this.stockInventoryService.getCartItems();
    const productsObs = this.stockInventoryService.getProducts();

    forkJoin(cartObs, productsObs).subscribe(
      ([cart, products]: [Item[], Product[]]) => {
        const myMap = products.map<[number, Product]>(product => [
          product.id,
          product
        ]);
        this.productMap = new Map<number, Product>(myMap);
        this.products = products;

        cart.forEach(item => {
          this.addStock(item);
        });
      }
    );
  }

  createStock(stock) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 10
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
