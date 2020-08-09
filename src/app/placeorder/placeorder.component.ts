
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {
  cart:Array<Product>=[];
  len:number;
  total:number=0;
  constructor( public crt: CartService, public db:AngularFireDatabase) {
    this.cart=crt.cart;
    this.len=crt.getlength();
   }
   Addtoplace(n,m,t):void{
    console.log(n,m,t);
   }

  ngOnInit(): void {
    for (let index = 0; index < this.cart.length; index++) {
      let ele=this.cart[index].price;
      this.total += +ele;
      
    }
  }

  

}
