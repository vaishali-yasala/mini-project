import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class MyservicenameService 
{
  constructor(private http : Http){ }

  private baseUrl = "https://api.github.com/users";

  getUsers() 
  {
    return this.http.get(this.baseUrl)
    .map(
      (response:Response) => response.json()
        );
  };
}