import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";
import { delay } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ProductDataService {
    
  constructor(private $http: HttpClient) {
    this.getAllProducts().subscribe(data => { console.log(data)});
  }
  
    getAllProducts(): Observable<Product> {
      return this.$http.get('http://localhost:4200/assets/products.json')
      .pipe(delay(2000)) as Observable<
        Product
      >;
    }
  }