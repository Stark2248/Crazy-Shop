import { Product } from './../Product';
import { CartService } from './../cart.service';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Array<Product>=[];
  total: number=0;


  constructor(crt:CartService) {
    this.cart=crt.cart;

    
    
   }

  ngOnInit(): void {
    for (let index = 0; index < this.cart.length; index++) {
      let ele=this.cart[index].price;
      this.total += +ele;
      
    }
    
  }

}
