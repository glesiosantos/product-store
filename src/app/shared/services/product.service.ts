import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AddProduct, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  post(payload: AddProduct) {
    return this.httpClient.post('/api/products', payload);
  }
}
