import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { constantDefine } from 'app/constantDefine';


@Injectable()
export class MyServiceNameService 
{
  constructor(private http : Http){ }

  private baseUrl = "https://api.github.com/users";

  getUsers() 
  {
    return this.http.get(constantDefine.Base_Data_URL)
    .map(
      (response:Response) => response.json()
        );
  };
}