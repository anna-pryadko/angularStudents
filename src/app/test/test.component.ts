import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  sum=60;
  a=10;
  b=10;
  arr=[1,2,3,4,5,6]
  color=0;

public users:Array<Object> = [
    {name: 'Anna', mail: '1@1.mail.com'},
    {name: 'Mike', mail: '2@2.mail.com 2'},
    {name: 'Nina', mail: '3@3.mail.com 3'},
    {name: 'Alex', mail: '4@4.mail.com '},
];

  constructor() { }

  ngOnInit() {
  }

CalcSum() {
  this.sum=this.a+this.b;
  return this.sum;
}

buttonClicked(color) {
  this.color=color
}

}
