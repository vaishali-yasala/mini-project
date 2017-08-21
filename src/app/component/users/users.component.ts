import { Component, OnInit } from '@angular/core';
import { MyServiceNameService } from "app/service/myservicename.service";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

constructor (private MyServiceNameService: MyServiceNameService){}
users: Observable <any>;

ngOnInit()
{
  this.MyServiceNameService.getUsers().subscribe
  (
  username => {this.users = username}
  );

}
}
