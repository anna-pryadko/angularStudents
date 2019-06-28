import { NgModule, Pipe, Directive, Component ,OnInit } from '@angular/core';
import { SettingsService } from '../service/settings.service';
import { ApiService } from '../service/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public allproducts:Array<Object> = [
    // {name: 'Milk', price: 5,image:"../../assets/images/milk.png"},
    {name: 'Milk', price: 5,image:"https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/FYP54_Z_P_7296073231554_1.png"},
    {name: 'Bread', price: 10,image:"https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/GGB28_Z_P_497044_1.png"},
    {name: 'Juice', price: 20,image:"https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/HCX16_Z_P_4030414_1.png"},
    {name: 'Meat', price: 60,image:"https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/BVG34_Z_P_915883_1.png"},
];

  public cartproducts:Array<Object> = [];

  public mainProducts:any=[];

  public min:number=0;
  public max:number=10;

  
  // prodArray= this.api.products;
  
  public productsByCategory:Array<Object> = [];
  
  constructor(public goFav:Router, public setServ:SettingsService, public api:ApiService, private spinner: NgxSpinnerService) {
    // console.log(setServ.sum(10,7));
    this.spinner.show();
    this.getProductsAsync();
   
  }

  async getProductsAsync()
  {
    //this.mainProducts=await this.api.getProducts();
    this.mainProducts.splice(0,100);
    this.spinner.hide();
    console.log("products",this.mainProducts);
  }

  ngOnInit() {
    
  }

  deleteProduct(i) {
    this.allproducts.splice(i,1);
    console.log(i,this.allproducts)
   
  }

  addProduct(i) {
    // let addprod=this.allproducts.find(i);
    this.cartproducts.push(this.allproducts[i]);
    console.log(i,this.allproducts)
   
  }

  // async setFavourite(id) {
  //   await this.api.setFavourite(id);
  // }

  // async delFavourite(id) {
  //   await this.api.delFavourite(id);
  // }

  showFavouriteProd() {
    this.goFav.navigate(['favourite']) 
  }

  prevPage() {
    if (this.min!=0) {
      this.min=this.min-10;
      this.max=this.max-10;
    }
    else (alert('This is the first page '))
  }

  nextPage() {
    this.min=this.min+10;
    this.max=this.max+10;
  }

  searchByCategory(idCat) {
    this.productsByCategory = [];
    for (let item of this.mainProducts) {
      if (item.catagory_id == idCat) {
        this.productsByCategory.push(item);
      }
    }
    console.log("categoryImported : ", this.productsByCategory);
  }

}

