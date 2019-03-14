import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductdetailComponent } from './products/productdetail/productdetail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'products/:id', component: ProductdetailComponent},
  {path : 'cart', component : CartComponent},
  {path : 'login', component : LoginComponent},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
