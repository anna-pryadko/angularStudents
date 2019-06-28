import { NgModule, Pipe, Directive, Component ,OnInit } from '@angular/core';
//import { SettingsService } from '../service/settings.service';
import { ApiService } from '../service/api.service';
//import { NgxSpinnerService } from 'ngx-spinner';
//import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //public searchStr="";

  //public searchNum="";

  public allStudentsHome:Array<Object> = [];
  
  constructor(public api:ApiService) {

    this.getAllStudents();
   
  }

  async getAllStudents()
  {
    this.allStudentsHome=await this.api.getAllStudents();
    
    console.log("cars",this.allStudentsHome);
  }

  ngOnInit() {
    
  }

  // deleteProduct(i) {
  //   this.allproducts.splice(i,1);
  //   console.log(i,this.allproducts)
   
  // }

  // addProduct(i) {
  //   // let addprod=this.allproducts.find(i);
  //   this.cartproducts.push(this.allproducts[i]);
  //   console.log(i,this.allproducts)
   
  // }

  // async setFavourite(id) {
  //   await this.api.setFavourite(id);
  // }

  // async delFavourite(id) {
  //   await this.api.delFavourite(id);
  // }

  // showFavouriteProd() {
  //   this.goFav.navigate(['favourite']) 
  // }

  // prevPage() {
  //   if (this.min!=0) {
  //     this.min=this.min-10;
  //     this.max=this.max-10;
  //   }
  //   else (alert('This is the first page '))
  // }

  // nextPage() {
  //   this.min=this.min+10;
  //   this.max=this.max+10;
  // }

//   searchByCategory(idCat) {
//     this.productsByCategory = [];
//     for (let item of this.mainProducts) {
//       if (item.catagory_id == idCat) {
//         this.productsByCategory.push(item);
//       }
//     }
//     console.log("categoryImported : ", this.productsByCategory);
//   }

}

