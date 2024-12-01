import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductPayload } from '../models/product.model';

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

  post(payload: ProductPayload) {
    return this.httpClient.post('/api/products', payload);
  }

  put(id: string, payload: ProductPayload) {
    return this.httpClient.put(`/api/products/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete(`/api/products/${id}`);
  }
}
