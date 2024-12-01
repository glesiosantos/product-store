import { Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';

export const routes: Routes = [
  {path:'', component: ProductListComponent},
  // mudando o carregamento para lazy load para aumentar a performace
  {path:'create',
    loadComponent: () => import('./features/product/create-product/create-product.component').then(
      m => m.CreateProductComponent
    ),
  }
];
