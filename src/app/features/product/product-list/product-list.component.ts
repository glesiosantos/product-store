import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: any[] = []
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.httpClient.get<any>('/api/products').subscribe((products) => this.products = products)
  }
}
