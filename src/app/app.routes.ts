import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';

export const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'create-product',
    loadComponent: () => import('./features/product/forms/forms.component').then(
      m => m.FormsComponent
    ), // mudando o carregamento para lazy load para aumentar a performace
  },
  {path:'edit',
    loadComponent: () => import('./features/product/product-edit/product-edit.component').then(
      m => m.ProductEditComponent)
  }
];
