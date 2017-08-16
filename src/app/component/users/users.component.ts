import { Component, OnInit } from '@angular/core';
import { MyservicenameService } from "app/service/myservicename.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

constructor (private MyservicenameService: MyservicenameService){}
users: Observable <any>;

ngOnInit()
{
  this.MyservicenameService.getUsers().subscribe
  (
    x => {this.users = x}
  );

}
}
