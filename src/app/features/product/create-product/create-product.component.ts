import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-product.component.html',
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
export class CreateProductComponent {

  productService = inject(ProductService)

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  })

  onSalve() {
    this.productService.post({title: this.form.controls.title.value}).subscribe(() => {
      alert('Succeso!')
    })
  }

}
