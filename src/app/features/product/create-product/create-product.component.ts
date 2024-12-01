import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormComponent } from '../components/form/form.component';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './create-product.component.html',
  styles: ``
})
export class CreateProductComponent {

  productService = inject(ProductService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  onSave(product: Product) {
    this.productService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok')
      this.router.navigateByUrl('/').catch(console.log)
    })
  }

}
