import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

public globalURL='http://localhost:5000/';

public allStudents;
public newStudents=new BehaviorSubject<object>({});

  constructor(public http:HttpClient) { }

  async getAllStudents() {
    try {
      const result = await this.http.get(this.globalURL + 'getAllStudents').toPromise();
      // console.log(result);
      this.allStudents=result;
      this.newStudents.next(result);
      console.log("products", this.allStudents);
      return this.allStudents;
    }
    catch (err) {
      return Promise.reject(err.error || 'Server error');
    }
  }

  async addStudent(user) {
    try {
      console.log("User un the Api: ",user)
      const result = await this.http.get(this.globalURL + `addStudent?name=${user.name}&mail=${user.mail}&age=${user.age}`).toPromise();
      // console.log(result);
      //this.allStudents = result;
      //console.log("products", this.allStudents);
      await this.getAllStudents;
      return;
    }
    catch (err) {
      return Promise.reject(err.error || 'Server error');
    }
  }

  
}
