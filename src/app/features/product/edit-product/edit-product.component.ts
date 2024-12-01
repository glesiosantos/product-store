import { Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './edit-product.component.html',
  styles: `
    .form-container {
      width: 75%;
      margin: 0 auto;
      padding: 25px;
      display: flex;
      flex-direction: column
    }
  `
})
export class EditProductComponent {

  productService = inject(ProductService)
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  product:Product = inject(ActivatedRoute).snapshot.data['product']

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, {
      nonNullable: true,
      validators: Validators.required
    })
  })

  onSave() {
    this.productService.put(this.product.id, {title: this.form.controls.title.value}).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok')
      this.router.navigateByUrl('/').catch(console.log)
    })
  }

}
