import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../shared/models/product.model';
import { FormComponent } from '../components/form/form.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './edit-product.component.html',
  styles: ``
})
export class EditProductComponent {

  productService = inject(ProductService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  product:Product = inject(ActivatedRoute).snapshot.data['product']

  onSave(product: Product) {
    console.log(product)
    this.productService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok')
      this.router.navigateByUrl('/').catch(console.log)
    })
  }

}
