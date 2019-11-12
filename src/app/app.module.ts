import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule,MatSidenavModule,MatInputModule,MatSelectModule, MatCardModule, MatTableModule, MatIconModule, MatSidenav} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { QrcodesComponent } from './qrcodes/qrcodes.component';
import { NgxQRCodeModule, } from "ngx-qrcode2";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AngularFireModule } from 'angularfire2';
import { environment } from "../environments/environment.prod";
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    QrcodesComponent,
    MainNavComponent,
    LoginPageComponent,
    RegisterPageComponent,
    
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    NgxQRCodeModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
