import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';



@NgModule({
  declarations: [AddProductComponent, ViewProductComponent, ViewUsersComponent, ViewMessagesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    AddProductComponent,
    ViewProductComponent
  ]
})
export class AdminModule { }
