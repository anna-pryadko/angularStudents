import { Component, OnInit, Input } from '@angular/core';
//import { SettingsService } from '../service/settings.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-fav-products',
  templateUrl: './fav-products.component.html',
  styleUrls: ['./fav-products.component.css']
})
export class FavProductsComponent implements OnInit {
  //@Input() favouriteProdArray;

  //favProdArray=this.api.favouriteProdArray;

  constructor(public api:ApiService) { }

  ngOnInit() {
   // console.log('favProdArray:', this.favProdArray)
  }

}
