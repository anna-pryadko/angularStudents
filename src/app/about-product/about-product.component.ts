import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit {

  public id='';
  public found={};
  //productsArray = this.api.products


  constructor(route:ActivatedRoute,public api:ApiService) {
    this.id=route.snapshot.params['id'];

    // this.found = this.productsArray.find((element) => { 
    //   return element.index === this.id; 
    // }); 

    console.log('Found: ',this.found);
    

   }

  ngOnInit() {
  }

}
