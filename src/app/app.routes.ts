import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { inject } from '@angular/core';
import { ProductService } from './shared/services/product.service';

export const routes: Routes = [
  {path:'', component: ProductListComponent},
  // mudando o carregamento para lazy load para aumentar a performace
  {path:'create',
    loadComponent: () => import('./features/product/create-product/create-product.component').then(
      m => m.CreateProductComponent
    ),
  },
  {path:'edit/:id',
    resolve: { // retorna o produto no carregamento
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productService = inject(ProductService)
        return productService.get(route.params['id'])
      }
    },
    loadComponent: () => import('./features/product/edit-product/edit-product.component').then(
      m => m.EditProductComponent
    ),
  }
];
