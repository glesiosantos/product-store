import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { CardComponent } from '../components/card/card.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent],
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
