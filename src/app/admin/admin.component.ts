import { AngularFireStorage } from 'angularfire2/storage';
import { Product } from './../Product';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  products: Product[];
  list : Observable<Product[]>;
  pr: any[];
  userkey: any;
  modal : HTMLElement

constructor(public db: AngularFireDatabase, public st: AngularFireStorage) {
      /*db.list('/products').valueChanges().subscribe(p => {
        this.products=<Product[]>p;
        //console.log(p);
      });*/
      this.list=db.list('/products').snapshotChanges().pipe(
        map(changes=> changes.map(c=> {
            const data= c.payload.val() as Product;
            const key=c.payload.key;
            return { key, ...data};
        })
        )

      );
      this.list.subscribe(p=>{this.products=<Product[]>p});
      //console.log(this.list);
      
     
  }

  ngOnInit(): void {
  }
  addpop():void {

    this.modal=document.getElementById("myModal");
    this.modal.style.display="block";
  }

  closepop():void {
    this.modal.style.display="none";
  }
  
  add(name:string,price:number){
    this.modal.style.display="none";
    this.db.database.ref('/products').push({"name":name,"price":<number>price,"url":this.url});
  }
  delete(key:string):void {
    this.db.list('/products').remove(key);

  }
  url: string;
  upload(event){
    
    let file=event.target.files[0];
    let name=<string>file.name;
    //console.log(name);
    
    this.st.upload(name,file);
    

    this.st.ref(name).getDownloadURL().subscribe(p=>this.url=<string>p);
  }

}
