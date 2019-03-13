import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './products/productdetail/productdetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './order/checkout/checkout.component';
import { OrderConfirmationComponent } from './order/order-confirmation/order-confirmation.component';
import { OrdersComponent } from './order/orders/orders.component';
import { BannerComponent } from './home/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    ProductdetailComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmationComponent,
    OrdersComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
