import { Component, OnInit, OnDestroy, ViewChild, NgModule } from '@angular/core';
import { ProductDataService } from '../core/index';
import { MatTableDataSource, MatSort, MatSidenavModule, MatDrawer } from '@angular/material';
import { Product } from '../core/products/product';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Product>();
  loading = true;
  subscriptions = [];
  displayedColumns = ['imgUrl', 'name', 'price', 'addToCart'];
  products: Product[] = [];

   headers = new HttpHeaders();

  // constructor(private httpClient: HttpClient) { 
    
  // }
  
  constructor(private productDataService: ProductDataService) { }

  

  ngOnInit() {
    
    this.subscriptions.push(
      this.productDataService.getAllProducts()
      .subscribe(products=> this.OnDataLoad(products))
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach( s => s.unsubscribe());
  }
  OnDataLoad(products) {
    this.loading = false;
    this.dataSource.data = products;
  }

}
