import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ViewProductComponent } from './admin/view-product/view-product.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { ViewMessagesComponent } from './admin/view-messages/view-messages.component';
import { RegisterComponent } from './user/register/register.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';


const routes: Routes = [
  {path:'add',component:AddProductComponent},
  {path:'view',component:ViewProductComponent},
  {path:'showusers',component:ViewUsersComponent},
  {path:'messages',component:ViewMessagesComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
