import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { CardComponent } from '../components/card/card.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButton],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = []
  productService = inject(ProductService)

  ngOnInit() {
    this.productService.getAll().subscribe(products => this.products = products)
  }
}
