import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() data;
  @Input() i;
  @Output() deleteProductComponent=new EventEmitter();
  @Output() addProductComponent=new EventEmitter();
  @Output() setFavouriteComponent=new EventEmitter();
  @Output() delFavouriteComponent=new EventEmitter();

  public checkOn=0;

  constructor(public nav:Router, public api:ApiService) { }

  ngOnInit() {
    console.log(this.data)
  }

  deleteProduct()
  {
    this.deleteProductComponent.emit(this.i);
  }

  addProduct()
  {
    this.addProductComponent.emit(this.i);
  }

  goToProduct(id) {
    console.log(id)
    this.nav.navigate(['ab/'+id])
    
    }

  changeFavourite(id) {
      console.log(id)
      if (this.checkOn===0){
        this.checkOn=1;
        this.setFavouriteComponent.emit(id);  
      }
      else {
        this.checkOn=0;
        this.delFavouriteComponent.emit(id);  
  }     
}
}