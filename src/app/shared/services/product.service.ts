import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductRequest } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>('/api/products');
  }

  get(id: string) {
    return this.httpClient.get<Product>(`/api/products/${id}`);
  }

  post(payload: ProductRequest) {
    return this.httpClient.post('/api/products', payload);
  }

  put(id:string, payload: ProductRequest) {
    return this.httpClient.post(`/api/products/${id}`, payload);
  }
}
