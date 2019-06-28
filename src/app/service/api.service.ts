import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

public globalURL='http://localhost:5000/';

public allStudents:any=[];

  constructor(public http:HttpClient) { }

  async getAllStudents() {
    try {
      const result = await this.http.get(this.globalURL + 'getAllSrudents').toPromise();
      // console.log(result);
      this.allStudents = result;
      console.log("products", this.allStudents);
      return this.allStudents;
    }
    catch (err) {
      return Promise.reject(err.error || 'Server error');
    }
  }

  async addStudent(user) {
    try {
      const result = await this.http.get(this.globalURL + `addSrudent?name=${user.name}&mail=${user.mail}&age=${user.age}`).toPromise();
      // console.log(result);
      this.allStudents = result;
      console.log("products", this.allStudents);
      return this.allStudents;
    }
    catch (err) {
      return Promise.reject(err.error || 'Server error');
    }
  }

  
}
