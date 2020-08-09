import { CartService } from './../cart.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from './../Product';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products: Product[];
  
  list : Observable<Product[]>;

  no: number;

  constructor(public db: AngularFireDatabase, public st: AngularFireStorage, public crt:CartService) {

    this.list=db.list('/products').snapshotChanges().pipe(
      map(changes=> changes.map(c=> {
          const data= c.payload.val() as Product;
          const key=c.payload.key;
          return { key, ...data};
      })
      )

    );
    this.list.subscribe(p=>{this.products=<Product[]>p});

   }



  ngOnInit(): void {
  }

  Addtocart(n:string,p:string,u: string){
    this.crt.add2cart(n,p,u);
    alert("Added to cart");
    this.no=this.crt.getlength();

    
  }

}
