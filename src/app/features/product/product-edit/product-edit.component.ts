import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product, ProductRequest } from '../../../shared/models/product.model';
import { FormsComponent } from "../components/forms/forms.component";

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [
    FormsComponent
],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {

  _router = inject(Router)
  _snackbar = inject(MatSnackBar)
  productService = inject(ProductService)
  product: Product  = inject(ActivatedRoute).snapshot.data['product'];

  handleSubmit(product: ProductRequest){
    this.productService.put(this.product.id, product).subscribe(() => {
      this._snackbar.open("Editado com sucesso!","Ok");
      this._router.navigateByUrl("/")
    })
  }

}
