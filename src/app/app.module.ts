import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';
// import {MatIconModule} from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule, Routes } from '@angular/router';
//import { AboutComponent } from './about/about.component';
//import { AboutProductComponent } from './about-product/about-product.component';
//import { FavProductsComponent } from './fav-products/fav-products.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CardsComponent,
    CardComponent,
    FormComponent,
    TableComponent,
    HomeComponent,
    MainComponent,
    CartComponent,
    ProductComponent,
    SideBarComponent,  
    // AboutComponent,
    //AboutProductComponent,
    //FavProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot(appRouter),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
