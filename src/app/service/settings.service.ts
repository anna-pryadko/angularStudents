import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

public names:Array<string>=["s1","s2","s3"];
public num:number=10;

  constructor(public apii:ApiService) { }

  sum(a,b) {
    let sum=a+b;
    return sum
  }


}
