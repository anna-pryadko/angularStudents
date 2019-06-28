import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartproducts;

  totalSum:0;

  constructor() { }

  ngOnInit() {
  
  var initialValue = 0;  
  this.totalSum = this.cartproducts.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price;
  }, initialValue)
    // this.totalSum=(this.totalSum+item.price);
    // this.totalSum = this.cartproducts.reduce((prev, curr) => prev + curr.price, 0);
    
  }

  deleteProductCart(i) {
    this.cartproducts.splice(i,1);
  }



}
