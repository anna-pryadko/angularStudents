import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public users:Array<Object> = [
    {name: 'Anna', mail: '1@1.mail.com'},
    {name: 'Mike', mail: '2@2.mail.com 2'},
    {name: 'Nina', mail: '3@3.mail.com 3'},
    {name: 'Alex', mail: '4@4.mail.com '},
];

 
  constructor() { }

  ngOnInit() {
  }

}

