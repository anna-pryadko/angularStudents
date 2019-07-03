import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { BehaviorSubject } from 'rxjs';

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

//public allStudentForm=new BehaviorSubject<object>({});

  constructor(public api:ApiService) { }

  ngOnInit() {
console.log(this.user.name,this.user.mail)

  }
async onSubmit() {
  await this.api.addStudent(this.user);
  
 }
}
