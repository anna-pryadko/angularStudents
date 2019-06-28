import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data;
  @Input() i;
  @Output() deleteUserComponent=new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

  deleteUser()
  {
    this.deleteUserComponent.emit(this.i);
  }
}
