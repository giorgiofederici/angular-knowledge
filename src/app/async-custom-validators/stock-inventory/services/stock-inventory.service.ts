import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
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

  checkBranchId(id: string): Observable<boolean> {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.httpClient
      .get<string[]>('http://localhost:3000/branches', {
        params
      })
      .pipe(
        map((response: string[]) => !!response.length),
        catchError((error: any) => throwError(error))
      );
  }
}
