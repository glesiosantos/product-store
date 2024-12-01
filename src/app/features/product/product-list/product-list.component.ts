import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { CardComponent } from '../components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CardComponent,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = []
  productService = inject(ProductService)
  _router = inject(Router)

  ngOnInit() {
    this.productService.getAll().subscribe(products => this.products = products)
  }

  onEdit(product: Product) {
    this._router.navigate(['edit', product.id])
  }

}
