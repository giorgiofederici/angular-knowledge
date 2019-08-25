import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { Product, Item } from '../models/product.model';

@Injectable()
export class StockInventoryService {
  constructor(private httpClient: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.httpClient
      .get<Item[]>('http://localhost:3000/cart')
      .pipe(catchError((error: any) => throwError(error)));
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>('http://localhost:3000/products')
      .pipe(catchError((error: any) => throwError(error)));
  }
}
