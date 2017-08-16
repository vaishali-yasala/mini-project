import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailInfoService 
{  
  constructor(private http : Http){}

  private baseUrl= "https://api.github.com/users";
  
  getDetailInfo( username: String)
  {   
    
    return this.http.get(this.baseUrl+ "/" + username)
    .map(
      (response:Response) => response.json()
        );
  };

    getRepo(url: String) {

     return this.http.get(this.baseUrl+"/"+url)
     .map((response: Response) => response.json());
  };
}