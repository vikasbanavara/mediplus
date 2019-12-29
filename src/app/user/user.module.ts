import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [RegisterComponent, CartComponent, OrdersComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
