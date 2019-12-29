import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.addProductForm = new FormGroup(
      {
        'name':new FormControl(null),
        'url':new FormControl(null),
        'type':new FormControl(null),
        'quantity':new FormControl(null),
        'cost':new FormControl(null),
        'discount':new FormControl(null),
        'startdate':new FormControl(null),
        'enddate':new FormControl(null)
      }
    );
  }

  addProduct() {
    console.log(this.addProductForm.value);
  }
}
