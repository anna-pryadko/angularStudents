import { NgModule, Pipe, Directive, Component ,OnInit } from '@angular/core';
//import { SettingsService } from '../service/settings.service';
import { ApiService } from '../service/api.service';
import { BehaviorSubject } from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allStudentsHome=[];
  public allStudentsHomeObj;
  constructor(public api:ApiService) {
    this.getAllStudents();

    api.allStudents.subscribe(result=>{
      this.allStudentsHomeObj=result;
     // this.allStudentsHome=Array.from(this.allStudentsHomeObj);
      console.log("SUBSCRIB: ",this.allStudentsHome)
    })
    
  }

  async getAllStudents()
  {
    this.allStudentsHomeObj=await this.api.getAllStudents();
    this.allStudentsHome=Array.from(this.allStudentsHomeObj);

    console.log("student",this.allStudentsHomeObj);
  }

  ngOnInit() {
    
  }

}

