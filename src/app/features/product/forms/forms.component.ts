import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  _snackbar = inject(MatSnackBar)
  _router = inject(Router)
  productService = inject(ProductService)

  form = new FormGroup({
    title: new FormControl<string>('', { nonNullable: true, validators: Validators.required})
  })

  onSubmit(){
    this.productService.post({
      title: this.form.controls.title.value
    }).subscribe(() => {
      this._snackbar.open("Criado com sucesso!","Ok", {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });

      this._router.navigateByUrl("/")
    })
  }
}
