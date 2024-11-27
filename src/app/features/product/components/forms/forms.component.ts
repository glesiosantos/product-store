import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  product = input<Product | null>(null);

  form!: FormGroup;

  @Output() handle = new EventEmitter<Product>();

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title ?? '', {
        nonNullable: true,
        validators: Validators.required
      })
    });
  }

  handleSubmit(){
    const product = this.form.value as Product;
    this.handle.emit(product);
  }
}
