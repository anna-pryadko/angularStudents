import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


user={
  name:"",
  mail:"",
  age:""
}
  constructor(public api:ApiService) { }

  ngOnInit() {
console.log(this.user.name,this.user.mail)

  }
onSubmit() {
   this.api.addStudent(this.user);
 }
}
