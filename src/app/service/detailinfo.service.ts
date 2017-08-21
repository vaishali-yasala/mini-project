import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { constantDefine } from 'app/constantDefine';

@Injectable()
export class DetailInfoService 
{  
  constructor(private http : Http){}
  
  getDetailInfo( username: String)
  {  
    return this.http.get(constantDefine.Base_Data_URL +"/"+ username)
    .map(
      (response:Response) => response.json()
        );
  };

    getRepo(url: String) {

     return this.http.get(constantDefine.Base_Data_URL+"/"+url)
     .map((response: Response) => response.json());
  };
}