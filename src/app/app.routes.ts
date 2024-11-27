import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ProductService } from './shared/services/product.service';

export const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'create',
    loadComponent: () => import('./features/product/create-product/create-product.component').then(
      m => m.CreateProductComponent
    ), // mudando o carregamento para lazy load para aumentar a performace
  },
  {path:'edit/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productService = inject(ProductService);
        return productService.get(route.paramMap.get('id') as string);
      }
    },
    loadComponent: () => import('./features/product/product-edit/product-edit.component').then(
      m => m.ProductEditComponent)
  }
];
