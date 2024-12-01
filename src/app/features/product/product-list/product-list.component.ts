import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';
import { CardComponent } from '../components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  template: `
    <h2 mat-dialog-title>Deleta Produto</h2>
    <mat-dialog-content>
      Tem certeza que deseja deletar este produto?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button mat-raised-button color="accent" (click)="onYes()" cdkFocusInitial>Sim</button>
    </mat-dialog-actions>
  `,
  imports: [MatButtonModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef)

  onNo() {
    this.matDialogRef.close(false)
  }

  onYes() {
    this.matDialogRef.close(true)
  }
}


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

  products: Product[] = [];
  productService = inject(ProductService);
  _router = inject(Router);
  _dialog = inject(MatDialog)

  ngOnInit() {
    this.productService.getAll().subscribe(products => this.products = products)
  }

  onEdit(product: Product) {
    this._router.navigate(['edit', product.id])
  }

  onDelete(product: Product) {
    this._dialog.open(ConfirmationDialogComponent).afterClosed().subscribe((answer: boolean) => {
        console.log("answer", answer)
    })

    // this.productService.delete(product.id)
  }

}
