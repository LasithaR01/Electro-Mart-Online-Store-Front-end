import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {CartComponent} from './components/cart/cart.component';
import {CheckoutComponent} from './components/checkout/checkout.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'products/:id', component: ProductsComponent,
  },
  {
    path: 'cart/:id', component: CartComponent,
  },
  {
    path: 'checkout/:id', component: CheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
