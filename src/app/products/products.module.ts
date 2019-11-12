import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatSidenavModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products.component';

import { NgxQRCodeModule } from 'ngx-qrcode2';    
import { FormsModule }    from '@angular/forms'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpModule,
    MatIconModule,
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    NgxQRCodeModule,
    FormsModule,
   
    MatSidenavModule,
  
  ],
  exports: [

      
      MatSidenavModule
    ],
  
 
})
export class ProductsModule { }
