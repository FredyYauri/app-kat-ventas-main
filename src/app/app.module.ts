import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ClientModule } from './client/cliente.module'
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { SaleComponent } from './sale/sale.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    SaleComponent,
    ProductDetailComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    ClientModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
