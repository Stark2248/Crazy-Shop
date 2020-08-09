import { Product } from './Product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Product>=[];
  total:number=0;
  constructor() { }

  add2cart( n: string, p: string,u:string):void{

    this.cart.push({name: n,price: p,url: u});
    console.log(u);

  }


  getlength():number{
    return this.cart.length;
  }

}
